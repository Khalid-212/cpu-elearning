import React, { useState } from "react";
import "./RegisterPage.css";
import Header from "../../components/Header/Header";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (data.success) {
        // Redirect to login page or another page if needed
        // window.location.href = "/login";
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
          <h1 className="heading">Sign Up</h1>
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
            <input
              type="password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
            <a href="../signin/signin.php">Already have an account?</a>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
