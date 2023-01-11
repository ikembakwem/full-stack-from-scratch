import React from "react"
import ReactDOM from "react-dom/client"

function App() {
  return (
    <div>
      <h1 style={{ color: "blue", textAlign: "center" }}>
        Hello from React
      </h1>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById("app") as HTMLElement
)

root.render(<App />)
