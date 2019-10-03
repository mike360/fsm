import React from "react"
import Button from "./Button"
import useFSM, { states } from "../lib/fsm"

export default function StateMachine({ initialState }) {
  const [state, dispatch] = useFSM(initialState)

  return (
    <div>
      <div className="buttons">
        <Button backgroundColor="#4299E1" onClick={() => dispatch("0")}>
          0
        </Button>
        <Button backgroundColor="#03D65C" onClick={() => dispatch("1")}>
          1
        </Button>
      </div>
      <p data-testid="currentState">Current State: {state}</p>
      <p data-testid="outputValue">Output Value: {states[state].output}</p>
      <style jsx>{`
        p {
          font-size: 1.5rem;
          margin: 2rem;
        }
        .states {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  )
}
