import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import NotFound from "./public/notfound"
import Home from "./public/home"
import PrivateHome from "./private/Home"
import Product from "./public/product"
import Category from "./public/category"
import Stores from "./public/stores"
import Store from "./public/store"
import StoreCollection from "./public/store-collection"

const checkAuth = (val: number): boolean => {
  return val ? true : false
}

interface IComponent {
  component: React.FC<any>
}

const AuthRoute: React.FC<any> = ({
  component: Component,
  ...rest
}: IComponent) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth(0) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
)

const AuthRouteRedirectTo: React.FC<any> = ({
  component: Component,
  to: To,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth(1) ? <Component {...props} /> : <To {...props} />
    }
  />
)

const Routes: React.FC = () => {
  return (
    <Switch>
      <AuthRouteRedirectTo exact path="/" component={PrivateHome} to={Home} />
      <Route path="/login" render={() => <Home />} />
      <Route path="/signup" render={() => <Home />} />
      <Route path="/profile/:username" render={() => <Home />} />
      <Route path="/category/:name" render={() => <Category />} />
      <Route path="/stores" render={() => <Stores />} />
      <Route path="/product/:name/:id" render={() => <Product />} />
      <Route path="/store/:name/collection/:collectionName" render={() => <StoreCollection />} />
      <Route path="/store/:name" render={() => <Store />} />

      {/* Private routes */}
      <AuthRoute path="/settings" component={Home} />
      <Route path="*" render={() => <NotFound />} />
    </Switch>
  )
}

export default Routes
