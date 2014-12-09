
import MIDIEvents from "npm:midievents"

import { emptyBuilder, handleEvent } from "app/lib/notes"

const {
  EVENT_MIDI_NOTE_ON:        NOTE_ON,
  EVENT_MIDI_NOTE_OFF:       NOTE_OFF,
  EVENT_META_TIME_SIGNATURE: TIME_SIGNATURE } = MIDIEvents

function getNotes(midi) {
  let events = midi.getEvents()
  let position = 0
  let builder = emptyBuilder
  for (let event of events) {
    let { delta, playTime: time, subtype, param1, param2, channel } = event
    position += delta
    if (subtype == NOTE_ON && param2 > 0) {
      builder = handleEvent(builder, {
        time, position, channel, note: param1, velocity: param2
      })
    } else if (subtype == NOTE_ON || subtype == NOTE_OFF) {
      builder = handleEvent(builder, {
        time, position, channel, note: param1, velocity: 0
      })
    }
  }
  return builder.notes
}

export function create(midi) {
  return {
    ppqn:  midi.header.getTicksPerBeat(),
    notes: getNotes(midi)
  }
}

