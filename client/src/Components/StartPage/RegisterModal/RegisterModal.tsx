import React, { useState } from "react";
import { IRegisterForm } from "../../../types";

const initialState: IRegisterForm = {
  name: "",
  email: "",
  password: "",
};

export default function RegisterModal() {
  const [inputValues, setInputValues] = useState(initialState) as [
    IRegisterForm,
    React.Dispatch<React.SetStateAction<IRegisterForm>>
  ];

  const inputsChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setInputValues: React.Dispatch<React.SetStateAction<IRegisterForm>>
  ) => {
    setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Действия при отправке формы
    console.log("Form submitted");
    console.log("name:", inputValues.name);
    console.log("email:", inputValues.email);
    console.log("password:", inputValues.password);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            value={inputValues.name}
            onChange={(e) => inputsChangeHandler(e, setInputValues)}
            placeholder="Input 1"
          />
          <br />
          <input
            type="email"
            name="email"
            value={inputValues.email}
            onChange={(e) => inputsChangeHandler(e, setInputValues)}
            placeholder="Input 2"
          />
          <br />
          <input
            type="password"
            name="password"
            value={inputValues.password}
            onChange={(e) => inputsChangeHandler(e, setInputValues)}
            placeholder="Input 2"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
