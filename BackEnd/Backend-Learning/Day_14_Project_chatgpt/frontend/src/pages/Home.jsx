import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Home Page</h1>
      <p>This is a placeholder home screen.</p>

      <div style={{ marginTop: "20px" }}>
        <button style={{ marginRight: "10px", padding: "10px 20px" }}>
          Go to Login
        </button>

        <button style={{ padding: "10px 20px" }}>
          Go to Register
        </button>
      </div>
    </div>
  );
};

export default Home;