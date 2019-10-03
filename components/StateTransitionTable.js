import React from "react"
import { states } from "../lib/fsm"

export default function StateTransitionTable() {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Current State</th>
          <th>Input</th>
          <th>Result State</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(states).map(state =>
          Object.keys(states[state].inputs).map(input => (
            <tr>
              <td>{state}</td>
              <td>{input}</td>
              <td>{states[state].inputs[input]}</td>
            </tr>
          )),
        )}
      </tbody>
    </table>
  )
}
