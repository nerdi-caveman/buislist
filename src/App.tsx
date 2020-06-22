import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.scss"
import Routes from "./routes/"
import ScrollToTop from "./components/scroll-to-top"

const disableDoubleTapHighlight = () => {
  document.addEventListener("mousedown", (e) => {
    if (e.detail > 1) {
      e.preventDefault()
    }
  })
}

const App: React.FC = () => {
  useEffect(() => {
    disableDoubleTapHighlight()
  })

  return (
    <div className="default">
      <BrowserRouter>
      <ScrollToTop />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
