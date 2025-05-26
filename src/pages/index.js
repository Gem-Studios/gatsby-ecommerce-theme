import React, { useState } from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [password, setPassword] = useState("");

  const checkPassword = () => {
    if (password === "gems") {
      alert("Access Granted!");
      window.location.href = "/shop";
    } else {
      alert("Access Denied!");
    }
  };

  return (
    <Layout>
      <h1 className="futuristic-font">Welcome to Gem Studios</h1>
      <p className="futuristic-glow">The future of fashion starts here.</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Access Code"
      />
      <button onClick={checkPassword}>Enter</button>
    </Layout>
  );
};

export default IndexPage;
