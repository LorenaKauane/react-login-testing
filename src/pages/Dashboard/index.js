import React from "react";
import PropTypes from "prop-types";

const Dashboard = ({ username, products }) => {
  return (
    <div>
      <p>Welcome, {username}!</p>
      {products ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <p>Name: {product.name}</p>|<p>Price: {product.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <strong>{username} has no registered products</strong>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  username: PropTypes.string,
  products: PropTypes.array,
};

export default Dashboard;
