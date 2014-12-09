
import MIDIFile from "midifile"
import co from "co"
import React from "react"
import run from "lib/run"
import yaml from "js-yaml"

import Application from "./application"
import task from "./task"
import * as IO from "lib/io"
import * as Song from "./models/song"
import * as Metrics from "./metrics"
import * as Microphone from "./microphone"
import NotesView from "./views/notes"

function render(application) {
  React.render(React.createElement(NotesView, { application }),
    document.querySelector('#notes'))
  let time = application.player.time()
  if (time !== undefined) {
    $('#notes-scroll').each(function() {
      this.scrollLeft = Metrics.x(time) - this.offsetWidth / 4
    })
  }
}

let loadMidi = co.wrap(function*(fileName, application) {

  let buffer = yield task(`Loading ${fileName}`, IO.loadFile(fileName))
  let midi = new MIDIFile(buffer)
  let song = Song.create(midi)

  application.song = song

})

let loadMetadata = co.wrap(function*(fileName, application) {

  let buffer = yield task(`Loading ${fileName}`, IO.loadFile(fileName))

})

let initializeApplication = co.wrap(function*(application) {
  
  Microphone.start()
  application.on('update', doRender)
  doRender()

  $('#notes-scroll').on('click', '.note', function(event) {
    if (application.playing) return true
    let channel = +this.dataset.channel
    if (application.options.channel === channel) {
      let time = +this.dataset.time
      application.play(time)
    } else {
      application.setOptions({ channel })
    }
    return false
  })

  $('#notes-scroll').on('click', function(event) {
    if (application.playing) {
      application.stop()
    } else {
      let x = event.clientX - this.getBoundingClientRect().left + this.scrollLeft
      let time = Metrics.time(x)
      application.play(time)
    }
  })

  function doRender() {
    render(application)
  }

})

run(co(function*() {

  let baseName = './hymns/' + location.search.match(/f=([^&]+)/)[1]
  let application = new Application()

  let midiName = baseName + '.mid'
  let metadataName = baseName + '.yml'

  return Promise.all([
    loadMidi(midiName, application),
    loadMetadata(metadataName),
    initializeApplication(application)
  ])

}))
