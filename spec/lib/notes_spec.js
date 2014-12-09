
import { emptyBuilder, handleEvent } from "app/lib/notes"

describe('notes', function() {

  it('should remember incoming notes', function() {
    let event = { time: 1000, position: 48, channel: 1, note: 60, velocity: 127 }
    let builder = handleEvent(emptyBuilder, event)
    expect(builder.active['1:60'].velocity).toEqual(127)
    expect(builder.notes.length).toEqual(0)
  })

  it('should remember multiple incoming notes', function() {
    let event = { time: 1000, position: 48, channel: 1, note: 60, velocity: 127 }
    let builder = handleEvent(emptyBuilder, event)
    event = { time: 1000, position: 48, channel: 1, note: 72, velocity: 64 }
    builder = handleEvent(builder, event)
    expect(builder.active['1:60'].velocity).toEqual(127)
    expect(builder.active['1:72'].velocity).toEqual(64)
  })

  it('should add new note when it ends', function() {
    let event = { time: 2000, position: 96, channel: 1, note: 60, velocity: 0 }
    let builder = { active: { '1:60': { velocity: 127, position: 48, time: 1500 } } }
    builder = handleEvent(builder, event)
    expect(builder.notes.length).toEqual(1)
    expect(builder.notes[0].time).toEqual(1500)
    expect(builder.notes[0].endTime).toEqual(2000)
    expect(builder.notes[0].position).toEqual(48)
    expect(builder.notes[0].endPosition).toEqual(96)
  })

})
