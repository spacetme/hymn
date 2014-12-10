
import co from "co"
import run from "lib/run"
import { pipe, context } from "./audio"
import R from "ramda"
import $ from "jquery"
import { mtof } from "./midi/note"

import * as Metrics from "./metrics"
import task from "./task"

export let note = 0

function request() {
  return new Promise(function(resolve, reject) {
    navigator.getUserMedia = navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia ||
                             navigator.msGetUserMedia
    navigator.getUserMedia({ audio: true }, resolve, reject)
  })
}

function nextFrame() {
  return new Promise(resolve => requestAnimationFrame(() => resolve(true)))
}

const NAME = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
function text(midi) {
  return (NAME[midi % 12] + (Math.floor(midi / 12) - 1))
}

export function start() {
  run(co(function*() {
    let microphone = yield task('Requesting microphone', request())
    let streamSource = context.createMediaStreamSource(microphone)
    let analyser = Object.assign(context.createAnalyser(), { fftSize: 2048 })

    let lp = Object.assign(context.createBiquadFilter(), { type: 'lowpass' })
    lp.frequency.value = 3400
    let hp = Object.assign(context.createBiquadFilter(), { type: 'highpass' })
    hp.frequency.value = 85
    let bin = freq => Math.floor(freq / (context.sampleRate / 2) * analyser.frequencyBinCount)

    pipe(streamSource)(hp)(lp)(analyser)

    let array = new Uint8Array(analyser.frequencyBinCount)
    let highest = 0
    while (yield nextFrame()) {
      analyser.getByteFrequencyData(array)
      highest = R.max(R.append(highest, array))
      let max = -1
      let maxTotal = -1
      for (let i = 5 * 21; i <= 5 * 96; i ++) {
        let midi = i / 5
        let total = 0
        let frequency = mtof(midi)
        for (let harmonic = 1; harmonic <= 8; harmonic ++) {
          total += array[bin(frequency * harmonic)] / harmonic
        }
        if (total > maxTotal) {
          maxTotal = total
          max = midi
        }
      }
      $('#sing').css('top', Metrics.y(max))
      $('#sing-text').text(text(Math.ceil(max)))
      note = max
    }

  }))
}


