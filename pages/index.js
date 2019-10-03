import Head from "next/head"
import StateMachine from "../components/StateMachine"
import StateTransitionTable from "../components/StateTransitionTable"

export default function Index() {
  return (
    <>
      <Head>
        <title>A Finite State Machine Exercise</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <h1>A Finite State Machine Exercise</h1>
        <StateMachine />
        <StateTransitionTable />
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          margin: 0 auto;
          max-width: 26.25rem;
          text-align: center;
        }
      `}</style>
      <style jsx global>{`
        body {
          color: #49454a;
          font-family: "Open Sans", sans-serif;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  )
}
