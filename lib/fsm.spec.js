import { reducer, S0, S1, S2, I0, I1 } from "./fsm"

describe("Reducer", () => {
  describe("When state is S0", () => {
    it("returns S1 when input is 1", () => {
      expect(reducer(S0, I1)).toEqual(S1)
    })
    it("returns S0 when input is 0", () => {
      expect(reducer(S0, I0)).toEqual(S0)
    })
  })

  describe("When state is S1", () => {
    it("returns S0 when input is 1", () => {
      expect(reducer(S1, I1)).toEqual(S0)
    })
    it("returns S2 when input is 0", () => {
      expect(reducer(S1, I0)).toEqual(S2)
    })
  })

  describe("When state is S2", () => {
    it("returns S2 when input is 1", () => {
      expect(reducer(S2, I1)).toEqual(S2)
    })

    it("returns S1 when input is 0", () => {
      expect(reducer(S2, I0)).toEqual(S1)
    })
  })

  describe("Acceptance Tests", () => {
    const handleInputSequence = (input = [], initialState = S0) => {
      let state = initialState
      const sequence = input.map(i => {
        state = reducer(state, i)
        return state
      })
      return sequence
    }

    describe("Example 1", () => {
      it("handles the input sequence 1, 1, 0", () => {
        expect(handleInputSequence([I1, I1, I0])).toEqual([S1, S0, S0])
      })
    })

    describe("Example 2a", () => {
      it("handles the input sequence 1, 0, 1, 0", () => {
        expect(handleInputSequence([I1, I0, I1, I0])).toEqual([S1, S2, S2, S1])
      })
    })

    describe("Example 2b", () => {
      it("handles the input sequence 1, 0, 1, 1", () => {
        expect(handleInputSequence([I1, I0, I1, I1])).toEqual([S1, S2, S2, S2])
      })
    })
  })
})
