import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Details from "./Pages/Details";
import Header from "./Header/Header";
import Cart from "./Pages/Cart";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Router>
        <Header search={search} setSearch={setSearch} />
        <div className="container mt-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route
              path="/products"
              exact
              render={(props) => <Products {...props} search={search} />}
            />
            <Route path="/details/:id" exact component={Details} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
