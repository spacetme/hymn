
import evolve from "lib/evolve"
import ramda from "ramda"
const { add } = ramda

describe("evolve", function() {
  it("should evolve the object", function() {
    let timer = { name: "Tomato", elapsed: 100, remaining: 1400 }
    let tick = { elapsed: add(1), remaining: add(-1) }
    expect(evolve(timer, tick))
      .toEqual({ name: "Tomato", elapsed: 101, remaining: 1399 })
  })
})

