
import React from "react"
import R from "ramda"

let C = (tag, className, opts, ...blah) =>
          React.createElement(tag,
            Object.assign({ className }, opts),
            ...blah)

let ColumnView = React.createClass({
  
  render() {
    let main = this.props.main ? ' is-main' : ''
    return C('div', 'lyrics-display--column' + main, {},
      C('ul', 'tabs', {},
        this.props.tabs.map(tab =>
          C('li',
            this.active(tab) ? 'is-active' : '',
            { key: tab.title,
              onClick: e => this.selectTab(tab),
              tabIndex: 0 },
            tab.title))),
      C('div', 'lyrics-display--content', {},
        C('pre', 'lyrics-data', {}, this.content())))
  },

  getInitialState() {
    return { activeTab: this.props.tabs[0].title }
  },

  componentWillReceiveProps(props) {
    if (!R.some(tab => tab.title == this.state.activeTab, props.tabs)) {
      this.setState({ activeTab: props.tabs[0].title })
    }
  },

  active(tab) {
    return tab.title == this.state.activeTab
  },

  content() {
    for (var tab of this.props.tabs) {
      if (tab.title == this.state.activeTab) {
        return tab.content
      }
    }
    return '?'
  },
  
  selectTab(tab) {
    this.setState({ activeTab: tab.title })
  }
  
})

let process = R.pipe(
  R.toPairs,
  R.map(([title, content]) => ({ title, content })),
  R.partition(tab => tab.title.match(/^\d+$/))
)

export default React.createClass({

  render() {
    let data = process(this.getData())
    let children = [
      C('div', 'lyrics-display--languages', {},
        this.renderLanguageList()),
      React.createElement(ColumnView, { tabs: data[0], key: 0, main: true })
    ]
    if (data[1].length > 0) {
      children.push(
        React.createElement(ColumnView, { tabs: data[1], key: 1, main: false })
      )
    }
    return React.createElement('div', { className: 'lyrics-display' },
      children)
  },

  getInitialState() {
    return { lang: 'en' }
  },

  getLanguages() {
    return R.sortBy(R.I, R.keys(this.props.data))
  },

  renderLanguageList() {
    return R.map(
      lang => C(
        'a',
        this.state.lang == lang ? 'is-active' : '',
        {
          onClick: e => {
            this.selectLanguage(lang)
            e.preventDefault()
          },
          href: '#' + lang
        },
        lang),
      this.getLanguages())
  },

  selectLanguage(lang) {
    this.setState({ lang })
  },

  getData() {
    return this.props.data[this.state.lang]
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

