
import * as NoteViewModel from "./note"

export function render({ application }) {
  let notes = application.notes
  return notes.map((note, index) => renderNote({ application, note, index }))
}

function renderNote({ application, note, index }) {
  let player = application.player

  let focus = note.channel === application.options.channel
  let active = false
  let score = focus ? application.scores.get(note) : undefined
  let time = player.time()
  if (time !== undefined && time >= note.time) active = true

  return NoteViewModel.render(
    { note, key: index, player, focus, active, score })
}
