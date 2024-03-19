import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (formData.email === "Prathap@gmail.com" && formData.password === "prathap123") {
      navigate("/admin");
    } else {
      navigate("/Book");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // You can submit the form data to your server or perform other actions here.
      setIsSubmitted(true);
    }
  };
  const handleNavigate = () => {
    navigate("/register");
  };
  return (
    <div>
      <div id="app">
        <section className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>LOGIN </h1>
            <fieldset>
              <div className="email">
                <input
                  type="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

              </div>
              {errors.email && <p className="error">{errors.email}</p>}

              <div className="email">
                <input
                  type="password"
                  placeholder="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </fieldset>

            <button>Submit</button>

            <div>
              <Link to={"/signup"}>
                <div>Don't have an Account ? Sign up</div>
              </Link>
            </div>
          </form>
        </section>
        <aside />
      </div>
    </div>
  );
}

export default Login;
