
export class Pumper {
  constructor() {
    this._pumper_bindings = []
  }
  bind(...pipeline) {
    this._pumper_bindings.push(pipeline.reduce((p, f) => x => f(p(x))))
  }
  push(state) {
    this._pumper_bindings.forEach(binding => binding(state))
  }
}

function optionable(defaultOptions, fn) {
  var wrap = function(options) {
    var wrapper = function() {
      return fn.apply(this, [].concat.call([options], [].slice.call(arguments)))
    }
    wrapper.displayName = fn + ' with options ' + JSON.stringify(options)
    wrapper.withOptions = function(newOptions) {
      return wrap(Object.assign({}, options, newOptions))
    }
    return wrapper
  }
  return wrap(defaultOptions)
}

export let onChange = optionable(
  {
    initial: undefined,
    equals: Object.is
  },
  function(options, callback) {
    var last = options.initial
    var equals = options.equals
    options = null
    return function onChangeHandleNewValue(value) {
      if (!equals(last, value)) {
        let previous = last
        last = value
        callback(value, previous)
      }
      return value
    }
  }
)

import equals from "deep-equal"

onChange.object = onChange.withOptions({ equals: equals })

export default Pumper

