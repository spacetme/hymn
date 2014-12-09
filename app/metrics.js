
export function x(time) {
  return time / 1000 * 64
}

export function time(x) {
  return x * 1000 / 64
}

export function y(note) {
  return (96 - note) * 5
}

