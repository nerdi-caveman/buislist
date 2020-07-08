import React from "react"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { MemoryRouter as Router } from "react-router-dom"
import MyStoreProducts from "../../routes/private/my-store-products"

Enzyme.configure({ adapter: new Adapter() })

describe("My product page", () => {
  let wrapper: any

  const props: any = { location: "" }

  const App: React.FC = () => (
    <Router>
      <MyStoreProducts.WrappedComponent {...props} />
    </Router>
  )

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  it("should have add-product button", () => {
    expect(wrapper.find("#add-product").exists()).toBeTruthy()
  })

  it("should open modal when add-product button clicked", () => {
    wrapper.find("#add-product").simulate("click")
    console.log(wrapper.find("#my-store-product #add-product-modal"))
    expect(
      wrapper.find("#my-store-product #add-product-modal").exists()
    ).toBeTruthy()
  })
})
