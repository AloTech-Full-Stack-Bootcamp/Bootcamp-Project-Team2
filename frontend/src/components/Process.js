import React, { useState, useEffect } from "react";
import "./Process.css";
import axios from "../API";
import { nanoid } from "nanoid";

function Process() {
  const [users, setUsers] = useState([]);
  let id = nanoid();

  useEffect(() => {
    axios.get("/").then((response) => {
      setUsers(response.data.JSON.Parse());
    });
  }, []);

  return (
    <div className="process">
      <h1>Admin Panel's Process</h1>

      <div className="process__table">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>UserSurname</th>
              <th>Password</th>
              <th>E-mail</th>
              <th>UserType</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={id}>
                  <td>{user.user_name}</td>
                  <td>{user.user_surname}</td>
                  <td>{user.user_password}</td>
                  <td>{user.user_email}</td>
                  <td>{user.user_type}</td>
                  <td>
                    <button>Delete</button>
                  </td>
                  <td>
                    <button>Update</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Process;
