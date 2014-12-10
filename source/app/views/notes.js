
import NoteView from "./note"
import Pumper from "lib/pumper/pumper"
import { children } from "lib/pumper/dom"

export default class NotesView extends Pumper {
  constructor(container) {
    super.constructor()
    this.bind(children(container, NoteView))
  }
}

