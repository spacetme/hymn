
import NoteView from "./note"
import Pumper from "lib/pumper/pumper"

function children(container, ChildClass) {
  var current = { }
  return function(list) {
    var toDelete = Object.assign({ }, current)
    list.forEach(function(state, index) {
      var key = state.key === undefined ? '#' + index : state.key
      var isNew = false
      if (!current[key]) {
        current[key] = new ChildClass()
        isNew = true
      }
      current[key].push(state)
      delete toDelete[key]
      if (isNew) {
        container.appendChild(current[key].element)
      }
    })
    for (let key in toDelete) {
      let view = toDelete[key]
      let element = view.element
      if (element.parentNode == container) container.removeChild(element)
    }
  }
}

export default class NotesView extends Pumper {
  constructor(container) {
    super.constructor()
    this.bind(children(container, NoteView))
  }
}

