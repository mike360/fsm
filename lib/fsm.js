import { useReducer } from "react"

const S0 = "S0"
const S1 = "S1"
const S2 = "S2"

export const states = {
  [S0]: {
    output: 0,
    inputs: {
      "0": S0,
      "1": S1,
    },
  },
  [S1]: {
    output: 1,
    inputs: {
      "0": S2,
      "1": S0,
    },
  },
  [S2]: {
    output: 2,
    inputs: {
      "0": S1,
      "1": S2,
    },
  },
}

export const reducer = (state, input) => states[state].inputs[input] || state

export default function useFSM(initialState = S0) {
  return useReducer(reducer, initialState)
}
