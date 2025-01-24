import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig"; // Correct path
import { useNavigate } from "react-router-dom"; // Updated import

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Updated from useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate("/dashboard"); // Redirect after successful login
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
              <h1 className="text-center mb-4" style={{ fontSize: "48px", color: "#5b32c7" }}>Login</h1>
              <h2 className="text-center mb-4" style={{ fontSize: "32px", color: "#fe6602" }}>Welcome Back</h2>
              
              <form onSubmit={handleSubmit}>
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
                <div className="d-grid mb-3">
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      backgroundColor: "#fe6602",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                    disabled={!email || !password}
                  >
                    Login
                  </button>
                </div>
                {error && <p className="text-danger text-center">{error}</p>}
                <div className="text-center">
                  <a href="/forgot-password" className="text-primary" style={{ fontSize: "14px" }}>
                    Forgot Password?
                  </a>
                </div>

                {/* Sign Up Button */}
                <div className="text-center mt-3">
                  <p style={{ fontSize: "14px" }}>
                    Don't have an account?{" "}
                    <a href="/SignUp" className="text-primary" style={{ fontWeight: "bold" }}>
                      Sign Up here
                    </a>
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

export default Login;
