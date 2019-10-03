import React from "react"
import Color from "color"

export default function Button({
  children,
  backgroundColor = "#333333",
  ...props
}) {
  return (
    <>
      <button {...props}>{children}</button>
      <style jsx>{`
        button {
          color: rgba(255, 255, 255, 0.8);
          border: none;
          background-color: ${backgroundColor};
          font-family: "Open Sans", sans-serif;
          font-size: 1rem;
          font-weight: bold;
          padding: 0.5rem 1rem;
          border-radius: 0.4rem;
          margin: 0 0.2rem;
        }

        button:active {
          background: ${Color(backgroundColor).darken(0.3)};
        }
      `}</style>
    </>
  )
}
