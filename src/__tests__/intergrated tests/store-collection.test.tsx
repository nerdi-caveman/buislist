import React from "react"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { MemoryRouter as Router } from "react-router-dom"
import StoreCollection from "../../routes/public/store-collection"
import StoreCollectionWrapper from "../../routes/public/store-collection/store-collection-wrapper"
import { slugToText } from "../../utils/string"

Enzyme.configure({ adapter: new Adapter() })

describe("Store collection Page", () => {
  const props: any = {
    match: {
      params: {
        name: "Ini-stores-inc",
        collectionName: "New-and-Featured",
      },
    },
  }
  const App: React.FC = () => (
    <Router>
      <StoreCollection.WrappedComponent {...props} />
    </Router>
  )

  it("should render", () => {
    shallow(<App />)
  })

  let wrapper: any

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  it("should pass the right collectionName to Store collection wrapper", () => {
    expect(
      wrapper.find(StoreCollectionWrapper).props().collectionName
    ).toStrictEqual(slugToText(props.match.params.collectionName))
  })
})

describe("Store collection wrapper", () => {
  const props: any = {
    storeName: "Ini stores",
    collectionName: "New and Featured",
    products: jest.fn(),
    addStoreFavourite:jest.fn()
  }
  const App: React.FC = () => (
    <Router>
      <StoreCollectionWrapper {...props} />
    </Router>
  )

  let wrapper: any

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it("should render", () => {
    shallow(<App />)
  })

  it("should have required props", () => {
    expect(wrapper.props().children.props).toHaveProperty("collectionName")
    expect(wrapper.props().children.props).toHaveProperty("products")
  })
})
