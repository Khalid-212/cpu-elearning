import React, { useState } from "react";
import "./LoginPage.css";
import Header from "../../components/Header/Header";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8081/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        // Redirect to another page if needed
        // window.location.href = "/somepage";
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <main className="main">
        <div className="mainLeft">
          <h1 className="heading">Sign In</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit} className="signInForm">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
            <a href="/register">Don't have an account</a>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
