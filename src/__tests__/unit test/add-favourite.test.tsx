import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { MemoryRouter as Router } from "react-router-dom"
import Store from "../../routes/public/store"
import Icon from "@mdi/react"
import { mdiHeart, mdiHeartOutline } from "@mdi/js"

Enzyme.configure({ adapter: new Adapter() })

describe("Stores Unit Tests", () => {
  const props: any = {
    params: {
      name: "Ini stores",
    },
  }

  const App: React.FC = () => (
    <Router>
      <Store.WrappedComponent match={props} />
    </Router>
  )
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  it("should rendertore add to favourite button", () => {
    const button: any = wrapper.find("#store-desc button#add-store")
    expect(button.exists()).toBeTruthy()
  })

  it("should add store to favourite on button click", () => {
    wrapper.find("#store-desc button#add-store").simulate("click")
    expect(
      wrapper
        .find("#store-desc button#add-store")
        .containsMatchingElement(
          <Icon path={mdiHeartOutline} size={0.8} color="#222222" />
        )
    ).toBeTruthy()
  })
})
