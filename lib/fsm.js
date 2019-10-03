import { useReducer } from "react"

// State Constants
export const S0 = "S0"
export const S1 = "S1"
export const S2 = "S2"

// Input Constants
export const I0 = "0"
export const I1 = "1"

export const states = {
  [S0]: {
    output: 0,
    inputs: {
      [I0]: S0,
      [I1]: S1,
    },
  },
  [S1]: {
    output: 1,
    inputs: {
      [I0]: S2,
      [I1]: S0,
    },
  },
  [S2]: {
    output: 2,
    inputs: {
      [I0]: S1,
      [I1]: S2,
    },
  },
}

export const reducer = (state, input) => states[state].inputs[input] || state

export default function useFSM(initialState = S0) {
  return useReducer(reducer, initialState)
}
