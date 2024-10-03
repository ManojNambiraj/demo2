import React, { useState } from "react";
import "./CreateUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    dept: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = await axios.post(
      "https://66fbfd68c3a184a84d159965.mockapi.io/students",
      userInput
    );

    if (postData) {
      navigate("/");
    }
  };

  return (
    <div className="user_form">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }} className="mb-5">
          User Register
        </h2>

        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="number"
            class="form-control"
            name="age"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Mobile</label>
          <input
            type="number"
            class="form-control"
            name="mobile"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Dept</label>
          <input
            type="text"
            class="form-control"
            name="dept"
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

export default CreateUser;
