import * as Metrics from "../metrics"

export function render(props) {
  return {
    className: classes(props),
    style: style(props, props.note),
    key: props.key,
    dataset: {
      channel: props.note.channel,
      time: props.note.time
    }
  }
}

function classes(props) {
  let out = ['note']
  let time = props.player.time()
  if (props.focus) {
    out.push('is-focus')
  }
  if (props.active) {
    out.push('is-active')
  }
  return out.join(' ')
}

function style(props, note) {
  let left = Metrics.x(note.time)
  let top = Metrics.y(note.note)
  let width = Metrics.x(note.endTime) - Metrics.x(note.time)
  let color = getColor(props)
  return { left, top, width, backgroundColor: color }
}

function getColor(props) {
  let color = ''
  let score = props.score
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
}

