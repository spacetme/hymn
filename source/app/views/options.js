
import Pumper from "lib/pumper/pumper"
import { onChange } from "lib/pumper/pumper"
import $ from "jquery"
import EventEmitter from "eventemitter3"

let active = element => activeness =>
      $(element).toggleClass('is-active', activeness)

export class OptionsView extends Pumper {
  constructor(element) {
    super.constructor()
    this.events = new EventEmitter()
    this.element = element
    this.$element = $(element).show()
    this.channels()
    this.mode()
  }
  channels() {
    var self = this
    this.$element.find('[data-channel]').each(function() {
      let number = +this.dataset.channel
      self.bind(
        options => options.channel,
        channel => number === channel,
        onChange(active(this))
      )
    }).on('click', function() {
      self.events.emit('channel', +this.dataset.channel)
    })
  }
  mode() {
    var self = this
    this.$element.find('[data-mode]').each(function() {
      let mode = this.dataset.mode
      self.bind(
        options => options.mode,
        value => value === mode,
        onChange(active(this))
      )
    }).on('click', function() {
      self.events.emit('mode', this.dataset.mode)
    })
  }
}

export default OptionsView

