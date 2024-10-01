import axios from "axios";
import React, { useEffect, useState } from "react";

function CRUD_App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await axios.get(
      "https://66fbfd68c3a184a84d159965.mockapi.io/students"
    );

    setUser(userData.data);
  };

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Dept</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.dept}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CRUD_App;

// CRUD -> Create Read Update Delete
//         POST   GET  PUT    DELETE

// https://mockapi.io/
