import React, { useState } from "react";

export default function Contact() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setuser({
      ...user,
      [name]: value,
    });

    if (value === "") {
      setErrors({
        ...errors,
        [name]: `${name} is required`,
      });
    } else {
      if (name === "email") {
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(value)) {
          setErrors({
            ...errors,
            [name]: `Invalid email format`,
          });
        } else {
          setErrors({
            ...errors,
            [name]: "",
          });
        }
      } else if (name === "name") {
        value.length > 5
          ? setErrors({
              ...errors,
              [name]: "Name should be less than 5 characters",
            })
          : setErrors({
              ...errors,
              [name]: "",
            });
      } else {
        if (value.length < 6) {
          setErrors({
            ...errors,
            [name]: "Password should be at least 6 characters",
          });
        } else {
          setErrors({
            ...errors,
            [name]: "",
          });
        }
      }
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    //console.log(e);
    console.log(user);
  };
  return (
    <>
      {JSON.stringify(user)}
      <div className="container mt-5">
        <div className="card p-4 shadow">
          <h3 className="mb-3">Register</h3>

          <form onSubmit={submitForm}>
            {/* Name */}
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={`form-control ${errors.name ? "border-danger" : ""}`}
                value={user.name}
                onChange={changeHandler}
              />
              <small className="text-danger">{errors.name}</small>
            </div>

            {/* Email */}
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`form-control ${errors.email ? "border-danger" : ""}`}
                value={user.email}
                onChange={changeHandler}
              />
              <small className="text-danger">{errors.email}</small>
            </div>

            {/* Password */}
            <div className="mb-3">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`form-control ${errors.password ? "border-danger" : ""}`}
                value={user.password}
                onChange={changeHandler}
              />
              <small className="text-danger">{errors.password}</small>
            </div>

            <button
              className="btn btn-primary w-100"
              type="submit"
              disabled={
                Object.values(user).some((u) => u === "") ||
                Object.values(errors).some((error) => error !== "")
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
