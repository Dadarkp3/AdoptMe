import React from "react";
import { render } from "react-dom";
import Results from "./Results";
import { Router, Link } from "@reach/router";
import Details from "./Details";
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Router>
          <Details path="/details/:id" />
          <Results exact path="/" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
