import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewUser() {

    const [user, setUser] = useState({
        name :"",
        username : "",
        password : ""
    });

     const {id}=useParams();

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async () => {
        const result =  await axios.get(`http://localhost:8888/user/${id}`);
        setUser(result.data);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
                Details of user id : {user.id}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Name : </b>
                        {user.name}
                    </li>
                    <li className="list-group-item">
                        <b>Username : </b>
                        {user.username}
                    </li>
                    <li className="list-group-item">
                        <b>Password : </b>
                        {user.password}
                    </li>
                </ul>

            </div>

          </div>
          <Link className="btn btn-primary" to={"/"}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
