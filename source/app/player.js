
import R from "ramda"
import { context, pipe, time as currentTime } from "./audio"
import Heap from "heap"
import run from "lib/run"
import co from "co"
import { mtof } from "./midi/note"
import EventEmitter from "eventemitter3"

let sortNotes = R.sortBy(R.prop('startTime'))
let getChannels = R.pipe(R.map(R.prop('channel')), R.uniq)

class Synth {
  constructor() {
    this.voices = {}
  }
  voice(n) {
    return this.voices[n] || (this.voices[n] = new Voice(n))
  }
}

class Voice {
  constructor(channel) {
    let oscilator = context.createOscillator()
    oscilator.type = 'square'
    oscilator.frequency.value = 440
    let gain = context.createGain()
    gain.gain.value = 0.0
    oscilator.start(context.currentTime)
    let volume = context.createGain()
    volume.gain.value = channel == 3 ? 0 : 0.1
    pipe(oscilator)(gain)(volume)(context.destination)
    this.osc = oscilator
    this.gain = gain
    this._volume = volume
    this.noteId = 0
  }
  get volume() {
    return this._volume.gain.value
  }
  set volume(volume) {
    this._volume.gain.value = volume
  }
  start(note, time) {
    let id = ++this.noteId
    this.gain.gain.cancelScheduledValues(time)
    this.gain.gain.setValueAtTime(1, time)
    this.gain.gain.exponentialRampToValueAtTime(0.5, time + 0.25)
    this.osc.frequency.setValueAtTime(mtof(note), time)
    return (stopTime) => {
      if (id != this.noteId) return
      this.gain.gain.cancelScheduledValues(stopTime)
      this.gain.gain.setValueAtTime(this.gain.gain.value, stopTime)
      this.gain.gain.linearRampToValueAtTime(0, stopTime + 0.1)
    }
  }
  stop() {
    this.gain.gain.cancelScheduledValues(0)
    this.gain.gain.value = 0
  }
}

function wait(ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms))
}

class PlayInstance {
  constructor({ player, notes, start, options }) {
    this.stopped = false
    this.player = player
    this.options = options
    this.channels = R.fromPairs(
      R.map(ch => [ch, this.voice(ch)], getChannels(notes)))
    this.queue = this._getInitialQueue(notes)
    this.startAudioTime = currentTime() * 1000
    this.startNoteTime = start
    this.play()
  }
  voice(ch) {
    return this.player.voice(ch)
  }
  _getInitialQueue(notes) {
    let events = R.map(note =>
      { return { time: note.time, f: t => this.start(note, t) } }, notes)
    let queue = new Heap((a, b) => a.time - b.time)
    for (let event of events) queue.push(event)
    return queue
  }
  time() {
    return currentTime() * 1000 - this.startAudioTime + this.startNoteTime
  }
  play() {
    run(co(function*() {
      while (!this.stopped && !this.queue.empty()) {
        let time = this.time() + 300
        while (!this.queue.empty() && time >= this.queue.peek().time) {
          let event = this.queue.pop()
          let audioTime = Math.max(
            (event.time - this.startNoteTime + this.startAudioTime) / 1000,
            currentTime()
          )
          event.f(audioTime)
        }
        this.player.emit('time', this.time())
        yield wait(1000 / 60)
      }
      this.player.stop()
    }.bind(this)))
  }
  stop() {
    this.stopped = true
    for (let channel of R.values(this.channels)) {
      channel.stop()
    }
  }
  start(note, audioTime) {
    let stop = this.channels[note.channel].start(note.note, audioTime)
    this.queue.push({ time: note.endTime - 33, f: t => stop(t) })
  }
}

export default class Player extends EventEmitter {

  constructor() {
    this.synth = new Synth()
  }

  voice(channel) {
    return this.synth.voice(channel)
  }

  time() {
    return this.playing ? this.playing.time() : undefined
  }

  stop() {
    if (this.playing) {
      this.playing.stop()
      this.playing = null
    }
  }
  
  play(notes, start, options) {
    this.stop()
    notes = R.reject(note => note.endTime < start, notes)
    this.playing = new PlayInstance({ player: this,
      notes: notes, start, options })
  }

}
