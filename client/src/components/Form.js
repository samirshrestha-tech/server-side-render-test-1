import React, { useState } from "react";
import { postTask } from "../helper/axiosHelper";

const initialState = {
  task: "",
  hr: "",
};
export const Form = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    // call api

    const data = await postTask(form);
    console.log(data);
  };

  return (
    <form onSubmit={handleOnSubmit} className="border p-5 rounded shadow-lg">
      <div className="row g-2">
        <div className="col-md-6">
          <input
            name="task"
            type="text"
            className="form-control"
            placeholder="i.e. Coding"
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-2">
          <input
            name="hr"
            type="number"
            className="form-control"
            placeholder="i.e. 44"
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-4 d-grid">
          <button className="btn btn-primary">Add New Task</button>
        </div>
      </div>
    </form>
  );
};
