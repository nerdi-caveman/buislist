import React from "react"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { MemoryRouter as Router } from "react-router-dom"
import Store from "../../routes/public/store"
import StoreHeader from "../../components/store-header"
import { productsData } from "../../utils/data"

Enzyme.configure({ adapter: new Adapter() })

describe("Stores Unit Tests", () => {
  const App: React.FC = () => (
    <Router>
      <Store.WrappedComponent match={props} />
    </Router>
  )
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  const props: any = {
    params: {
      name: "Ini stores",
    },
  }

  it("should render store component", () => {
    shallow(<App />)
  })

  it("should have store header", () => {
    const collections = [
      { name: "New and Featured", products: productsData.slice(3, 6) },
      { name: "Mens", products: productsData.slice(4, 7) },
      { name: "Womens", products: productsData.slice(8, 10) },
      { name: "Kids", products: productsData.slice(0, 3) },
      { name: "Shoes", products: productsData.slice(0, 3) },
    ]
    expect(
      wrapper.containsMatchingElement(
        <StoreHeader name={props.params.name} navigation={collections} />
      )
    ).toBeTruthy()
  })

  it("should have best-sellers-section, collection-slider and new-section", () => {
    expect(wrapper.find("#best-sellers-section")).toHaveLength(1)
    expect(wrapper.find("#new-section")).toHaveLength(1)
    expect(wrapper.find("#collection-section")).toHaveLength(1)
  })

  it("should have a footer", () => {
    expect(wrapper.find("footer")).toHaveLength(1)
  })
})
