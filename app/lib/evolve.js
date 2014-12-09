
import ramda from "ramda"
const { mixin, mapObj, curry } = ramda

export default curry(function evolve(object, transformations) {
  return mixin(object, mapObj.idx((f, k) => f(object[k]), transformations))
})

