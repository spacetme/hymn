
import MIDIFile from "midifile"
import co from "co"
import React from "react"
import run from "lib/run"
import yaml from "js-yaml"
import $ from "jquery"

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

let selectSong = co.wrap(function *() {

  let $welcome = $('#welcome').show()
  let yaml = yield IO.loadYaml('./hymns/index.yml')
  let $songlist = $('#songlist')
  $songlist.find('.js-songlist-loading').hide()

  let $ul = $('<ul class="song-list"></ul>').appendTo($songlist)
  for (let song of yaml) {
    $('<a href="javascript://"></a>')
      .text(song.name)
      .attr('data-song', song.id)
      .appendTo($('<li></li>').appendTo($ul))
  }

  let result = yield songlistWaitClick($songlist)
  $welcome.hide()
  return result

})

function songlistWaitClick($songlist) {
  return new Promise(function(resolve) {
    $songlist.on('click', '[data-song]', function() {
      let x = $(this).attr('data-song')
      history.pushState({}, '', '?f=' + x)
      resolve(x)
    })
  })
}

run(co(function*() {

  $('#app-loading').hide()
  let application = new Application()

  let m = location.search.match(/f=([^&]+)/)
  let song = m ? m[1] : yield selectSong()
  let baseName = './hymns/' + song
  let midiName = baseName + '.mid'
  let metadataName = baseName + '.yml'

  window.onpopstate = () => location.reload()

  return Promise.all([
    loadMidi(midiName, application),
    loadMetadata(metadataName),
    initializeApplication(application)
  ])

}))
