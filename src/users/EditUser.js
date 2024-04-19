import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {

    let navigate = useNavigate();

    const {id}=useParams()

    const[user, setUser] = useState({
        name:"",
        username:"",
        password:""
    })

    const {name, username, password} = user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    useEffect(() => {
        loadUser();
    }, []);

    const onsubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8888/user/${id}`, user)
       navigate("/")
    }

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8888/user/${id}`)
        setUser(result.data)
    }
  
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
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
              onChange={(e)=>onInputChange(e)}
            ></input>
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
              onChange={(e)=>onInputChange(e)}
            ></input>
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
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <Link type="submit" className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
