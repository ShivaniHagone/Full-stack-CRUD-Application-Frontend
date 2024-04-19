import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [errors, setError] = useState({});
  const validate = () => {
    const { name, username, password } = user;
    let error = {};

    if (!name) {
      error.name = "Name is required";
    }
    if (!username) {
      error.username = "Username is required";
    }
    if (!password) {
      error.password = "Password is required";
    }
    setError(error);
    return Object.keys(error).length === 0;
  };

  const { name, username, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    if(validate()){
    await axios.post("http://localhost:8888/user", user);
    navigate("/");
    }
  };

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={onsubmit}>
            <div className="mb-3">
              <label className="form-lable" htmlFor="Name">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>
              <p>{errors.name}</p>
            </div>
            <div className="mb-3">
              <label className="form-lable" htmlFor="Username">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              ></input>
              <p>{errors.username}</p>
            </div>
            <div className="mb-3">
              <label className="form-lable" htmlFor="Password">
                Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Password please"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              ></input>
              <p>{errors.password}</p>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary"
              // onSubmit={onError}
            >
              Submit
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
