
import React from "react"
import NoteView from "./note"

export default React.createClass({

  render() {
    return React.createElement('div', { className: 'notes' },
      this.renderNotes())
  },

  renderNotes() {
    let application = this.props.application
    let notes = application.notes
    return notes.map((note, index) => this.renderNote(note, index))
  },
  
  renderNote(note, index) {
    let application = this.props.application
    let player = application.player
    let focus = note.channel === application.options.channel
    let active = false
    let score = focus ? application.scores.get(note) : undefined
    let time = player.time()
    if (time !== undefined && time >= note.time) active = true
    return React.createElement(NoteView,
      { note, key: index, player, focus, active, score })
  },

})
