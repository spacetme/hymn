
import $ from "jquery"
import Pumper from "lib/pumper/pumper"
import { onChange } from "lib/pumper/pumper"

export default class NoteView extends Pumper {

  constructor() {
    super.constructor()
    this.$element = $('<div class="note"></div>')
    this.element = this.$element[0]
    this.bind(
      x => x.className,
      onChange(v => this.element.className = v))
    this.bind(
      x => x.style,
      onChange.object(v => this.$element.css(v)))
    this.bind(
      x => x.dataset,
      onChange.object(v => Object.assign(this.element.dataset, v)))
  }

}

