import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./public/notfound";
import Home from "./public/home";
import PrivateHome from "./private/Home";
import Product from "./public/product";
import Category from "./public/category";
import Adminhome from "./admin/adminhome";
import Storeslist from "./admin/storeslist";
import Storedetails from "./admin/storedetails";
import Userslist from "./admin/userslist";
import Userdetails from "./admin/userdetails";
import Reported from "./admin/reportedpage";
import Productlist from "./admin/productlist";
import Productdetails from "./admin/productdetails";

const checkAuth = (val: number): boolean => {
  return val ? true : false;
};

interface IComponent {
  component: React.FC<any>;
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
);

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
);

const Routes: React.FC = () => {
  return (
    <Switch>
      <AuthRouteRedirectTo exact path="/" component={PrivateHome} to={Home} />
      <Route path="/login" render={() => <Home />} />
      <Route path="/signup" render={() => <Home />} />
      <Route path="/profile/:username" render={() => <Home />} />
      <Route path="/category/:name" render={() => <Category />} />
      <Route path="/store" render={() => <Home />} />
      <Route path="/store/:name" render={() => <Home />} />
      <Route path="/product/:name/:id" render={() => <Product />} />
      
      <Route path="/admin" render={() => <Adminhome />} />
      <Route path="/stores" render={() => <Storeslist />} />
      <Route path="/users" render={() => <Userslist />} />
      <Route path="/products" render={() => <Productlist />} />
      <Route path="/reported" render={() => <Reported />} />
      <Route path="/storeinfo/:name/:id" render={() => <Storedetails />} />
      <Route path="/userinfo/:name/:id" render={() => <Userdetails />} />
      <Route path="/productinfo/:name/:id" render={() => <Productdetails />} />

      {/* Private routes */}
      <AuthRoute path="/settings" component={Home} />
      <Route path="*" render={() => <NotFound />} />
    </Switch>
  );
};

export default Routes;
