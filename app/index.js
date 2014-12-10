
import MIDIFile from "midifile"
import co from "co"
import React from "react"
import run from "lib/run"
import yaml from "js-yaml"
import $ from "jquery"

import Application from "./application"
import task from "./task"
import * as IO from "lib/io"
import * as Lyrics from "./lyrics"
import * as Song from "./models/song"
import * as Metrics from "./metrics"
import * as Microphone from "./microphone"
import Renderer from "./renderer"

let loadMidi = co.wrap(function*(fileName, application) {
  let buffer = yield task(`Loading ${fileName}`, IO.loadFile(fileName))
  let midi = new MIDIFile(buffer)
  let song = Song.create(midi)
  application.song = song
})

let loadMetadata = co.wrap(function*(fileName, application) {
  let yaml = yield task(`Loading ${fileName}`, IO.loadYaml(fileName))
  Lyrics.display(yaml.lyrics)
})

let initializeApplication = co.wrap(function*(application) {
  
  Microphone.start()
  Renderer.render(application)

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
