
import Note from "~/views/note"

describe('NoteView', function() {

  it('should have "note" class', function() {
    expect(new Note().element.classList.contains('note')).toBe(true)
  })

  it('should change class based on className', function() {
    let note = new Note()
    note.push({ className: 'wow', style: {}, dataset: {} })
    expect(note.element.className).toBe('wow')
  })

  it('should set style attribute', function() {
    let note = new Note()
    note.push({ className: '', style: { width: 1 }, dataset: {} })
    expect(note.element.style.width).toBe('1px')
  })

  it('should set data attributes', function() {
    let note = new Note()
    note.push({ className: '', style: {}, dataset: { x: 'wow' } })
    expect(note.element.getAttribute('data-x')).toBe('wow')
  })

})
