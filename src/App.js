import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Dashoboard from "./pages/Dashboard";
import PropTypes from "prop-types";

// const mockDataBase = [
//   {
//     username: "x",
//     products: [
//       {
//         id: 1,
//         name: "T-shirt",
//         price: 25,
//       },
//       {
//         id: 2,
//         name: "Pants",
//         price: 50,
//       },
//     ],
//   },
//   {
//     username: "2",
//     products: [
//       {
//         id: 1,
//         name: "Shoes",
//         price: 100,
//       },
//       {
//         id: 2,
//         name: "Sock",
//         price: 20,
//       },
//       {
//         id: 2,
//         name: "Cap",
//         price: 30,
//       },
//     ],
//   },
// ];

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
