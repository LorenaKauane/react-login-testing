import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Dashoboard from "./pages/Dashboard";
import PropTypes from "prop-types";

function App({ isLoggedin, username, products }) {
  return (
    <div className="App">
      {isLoggedin ? (
        <Dashoboard username={username} products={products} />
      ) : (
        <Login />
      )}
    </div>
  );
}

App.propTypes = {
  isLoggedin: PropTypes.bool,
  username: PropTypes.string,
  products: PropTypes.array,
};

export default App;
