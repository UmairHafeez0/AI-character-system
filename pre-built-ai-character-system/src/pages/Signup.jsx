import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig"; // Correct path
import { useNavigate } from "react-router-dom"; // Updated import

const SignUp = () => {
  const [name, setName] = useState(""); // Added name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // Optionally, save the user's name to Firestore or Firebase Realtime Database
      navigate("/dashboard"); // Redirect after successful sign-up
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row w-100">
        <div className="col-12 col-md-6 mx-auto">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-body p-5">
              <h1 className="text-center mb-4" style={{ fontSize: "48px", color: "#5b32c7" }}>
                Sign Up
              </h1>
              <h2 className="text-center mb-4" style={{ fontSize: "32px", color: "#fe6602" }}>
                Create an Account
              </h2>
              
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control py-3"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control py-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control py-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control py-3"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid mb-3">
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      backgroundColor: "#fe6602",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                    disabled={!name || !email || !password || !confirmPassword}
                  >
                    Sign Up
                  </button>
                </div>
                {error && <p className="text-danger text-center">{error}</p>}
                <div className="text-center">
                  <p style={{ fontSize: "14px" }}>
                    Already have an account?{" "}
                    <a href="/" className="text-primary">Login here</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
