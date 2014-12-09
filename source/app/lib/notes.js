
import ramda from "ramda"
const { assoc, pick, omit, append } = ramda

import evolve from "lib/evolve"

// Note :: { time, endTime, position, endPosition, channel, note }
// Builder :: { notes :: [Note], active: { [noteId]: start :: Event } }
//
export const emptyBuilder = {
  notes:  [ ],
  active: { }
}

// Event :: { time, position, channel, note, velocity }
// handleEvent :: (Builder, Event) -> Builder
//
export function handleEvent(builder, event) {
  if (event.velocity > 0) {
    return evolve(builder, {
      active: assoc(noteId(event), event)
    })
  } else {
    let id = noteId(event)
    if (builder.active[id]) {
      let start = builder.active[id]
      return evolve(builder, {
        active: omit([id]),
        notes:  append(createNote(start, event))
      })
    }
  }
}

// noteId :: (Event) -> String
//
function noteId({ channel, note }) {
  return `${channel}:${note}`
}

// createNote: (Event, Event) -> Note
//
function createNote(start, finish) {
  let { time, position, channel, note } = start
  let { time: endTime, position: endPosition } = finish
  return { time, endTime, position, endPosition, channel, note }
}
