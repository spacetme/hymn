
import NotesView from "./views/notes"
import OptionsView from "./views/options"
import * as NotesViewModel from "./view_models/notes"
import * as Metrics from "./metrics"

var notesView = new NotesView(document.querySelector('#notes'))

export class Renderer {

  constructor(application) {
    this.application = application
    this.initialize()
    this.bindEvents()
    this.render()
  }

  initialize() {
    var application = this.application
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
    this.options = new OptionsView($('#options')[0])
    this.options.events.on('channel', channel => application.setOptions({ channel }))
    this.options.events.on('mode',       mode => application.setOptions({ mode }))
  }

  bindEvents() {
    this.application.on('update', () => this.render())
  }

  render() {
    this.notes()
    this.scroll()
    this.options.push(this.application.options)
  }

  notes() {
    let vm = NotesViewModel.render({ application: this.application })
    notesView.push(vm)
  }

  scroll() {
    let time = this.application.player.time()
    if (time !== undefined) {
      $('#notes-scroll').each(function() {
        this.scrollLeft = Metrics.x(time) - this.offsetWidth / 4
      })
    }
  }

}

Renderer.render = function(application) {
  return new Renderer(application)
}

export default Renderer
