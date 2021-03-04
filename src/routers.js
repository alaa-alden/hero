import Layout from "./components/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Search from "./pages/search";
import Cart from "./pages/cart";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Faild from "./pages/faild";
import { useContext, useEffect } from "react";
// import $ from "jquery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import Cookies from "js-cookie";
import AuthContext from "./context";
export default function RouterS() {
  const Auth = useContext(AuthContext);
  // console.log(Auth.auth)
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/search" exact component={Search} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/product" exact component={Product} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/checkout" exact component={Checkout} />
          <ProtectSign
            auth={Auth.auth}
            path="/signin"
            exact
            component={SignIn}
          />
          <ProtectSign
            auth={Auth.auth}
            path="/signup"
            exact
            component={SignUp}
          />
          <ProtectRoute
            to="/test"
            auth={Auth.auth}
            exact
            component={() => <h1>hello</h1>}
          />
          <Route path="*" component={Faild} />
        </Switch>
      </Layout>
    </Router>
  );
}
const ProtectRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component {...rest}  /> : <Redirect to="/signin" />)}
    />
  );
};
const ProtectSign = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Redirect to="/" />)}
    />
  );
};
