import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    dept: "",
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await axios.get(
      `https://66fbfd68c3a184a84d159965.mockapi.io/students/${id}`
    );

    setUserInput(userData.data);
  };

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = await axios.put(
      `https://66fbfd68c3a184a84d159965.mockapi.io/students/${id}`,
      userInput
    );

    if (updatedData) {
      navigate("/");
    }
  };

  return (
    <div className="user_form">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }} className="mb-5">
          Edit User Form
        </h2>

        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={userInput.name}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="number"
            class="form-control"
            name="age"
            value={userInput.age}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Mobile</label>
          <input
            type="number"
            class="form-control"
            name="mobile"
            value={userInput.mobile}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={userInput.email}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Dept</label>
          <input
            type="text"
            class="form-control"
            name="dept"
            value={userInput.dept}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditUser;
