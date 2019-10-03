import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import StateMachine, { reducer } from "./StateMachine"

describe("State Machine", () => {
  describe("Component", () => {
    const testStateTransition = (initialState, input, expectedState) => {
      const { container, getByText, getByTestId, rerender } = render(
        <StateMachine initialState={initialState} />,
      )
      const Button = getByText(input)
      fireEvent.click(Button)
      expect(getByTestId("currentState").textContent).toMatch(
        new RegExp(expectedState),
      )
    }

    describe("When in S0 state", () => {
      it("first renders with initial state", () => {
        const { container, getByText } = render(<StateMachine />)
        expect(container).toMatchSnapshot()
      })
      it("updates the state to S1 when the 1 button is clicked", () => {
        testStateTransition("S0", "1", /S1/)
      })

      it("stays in S0 state when 0 button is clicked", () => {
        testStateTransition("S0", "0", /S0/)
      })
    })

    describe("When in S1 state", () => {
      it("updates the state to S2 when 0 is clicked", () => {
        testStateTransition("S1", "0", /S2/)
      })

      it("updates the state to S0 when 1 is clicked", () => {
        testStateTransition("S1", "1", /S0/)
      })
    })

    describe("When in S2 state", () => {
      it("updates the state to S1 when 0 is clicked", () => {
        testStateTransition("S2", "0", /S1/)
      })

      it("stays in S2 when 1 is clicked", () => {
        testStateTransition("S2", "1", /S2/)
      })
    })
  })
})
