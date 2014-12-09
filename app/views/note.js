
import React from "react"
import * as Metrics from "../metrics"

export default React.createClass({

  render() {
    return React.createElement('div', {
      className: this.classes(),
      style: this.style(this.props.note),
      'data-channel': this.props.note.channel,
      'data-time': this.props.note.time
    })
  },

  classes() {
    let out = ['note']
    let time = this.props.player.time()
    if (this.props.focus) {
      out.push('is-focus')
    }
    if (this.props.active) {
      out.push('is-active')
    }
    return out.join(' ')
  },

  style(note) {
    let left = Metrics.x(note.time)
    let top = Metrics.y(note.note)
    let width = Metrics.x(note.endTime) - Metrics.x(note.time)
    let color = this.getColor()
    return { left, top, width, backgroundColor: color }
  },

  getColor() {
    let color = ''
    let score = this.props.score
    if (score !== undefined) {
      let r = 1, g = 0
      let c = v => Math.round(v * 255)
      if (score < 0.5) {
        g = score / 0.5
      } else {
        g = 1
        r = (1 - score) * 2
      }
      color = 'rgb(' + c(r) + ',' + c(g) + ',0)'
    }
    return color
  },

})

