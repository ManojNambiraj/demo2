import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
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

  const handleDelete = async (id) => {
    const deletedUser = await axios.delete(
      `https://66fbfd68c3a184a84d159965.mockapi.io/students/${id}`
    );

    if (deletedUser) {
      getData();
    }
  };

  return (
    <div>
      <Link to={"/create"} type="button" class="btn btn-primary m-4">
        Create User
      </Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Dept</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.dept}</td>
                <td>
                  <Link
                    to={`/edit/${item.id}`}
                    className="btn btn-success btn-sm"
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
