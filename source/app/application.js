
import EventEmitter from "eventemitter3"
import Player from "./player"
import R from "ramda"
import * as Microphone from "./microphone"
import * as Config from "./config"

export default class Application extends EventEmitter {
  constructor() {
    this.song = undefined
    this.options = { channel: 0 }
    this.player = new Player()
    this.player.on('time', (pos) => this.update(pos))
    this.scores = new Map()
  }

  get song() {
    return this._song
  }
  set song(song) {
    this._song = song
    this.emit('update')
  }

  setOptions(options) {
    this.options = R.mixin(this.options, options)
    this.emit('update')
  }

  get notes() {
    return this._song ? this._song.notes : []
  }
  update(time) {
    if (!this.song) return
    for (let note of this.song.notes) {
      if (time >= note.time && time < note.endTime + Config.AUDIO_DELAY) {
        if (Microphone.note) {
          let deviation = Math.max(0, Math.abs(Microphone.note - note.note) - 0.25)
          let score = Math.exp(-deviation / 2)
          let oldScore = this.scores.get(note) || 0
          this.scores.set(note, Math.max(oldScore, score))
        }
      }
    }
    this.emit('update')
  }
  play(start) {
    if (!this.song) return
    this.player.play(this.song.notes, start, this.options)
    this.scores = new Map()
  }
  stop() {
    this.player.stop()
  }
  get playing() {
    return !!this.player.playing
  }
}

