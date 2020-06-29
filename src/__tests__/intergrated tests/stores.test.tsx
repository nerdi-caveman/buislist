import React from "react"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { MemoryRouter as Router } from "react-router-dom"
import Stores from "../../routes/private/my-store"

Enzyme.configure({ adapter: new Adapter() })

describe("Stores Unit Tests", () => {
  const App: React.FC = () => (
    <Router>
      <Stores  />
    </Router>
  )
  it("should render store component", () => {
    shallow(<App />)
  })
})
