
let AudioContext = window.AudioContext || window.webkitAudioContext

export let context = new AudioContext()
export default context

function pipeFrom(from) {
  return function(to, ...rest) {
    from.connect(to, ...rest)
    return pipeFrom(to)
  }
}

export function pipe(node) {
  return pipeFrom(node)
}

export function time() {
  return context.currentTime
}
