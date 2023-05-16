import React, { useState } from "react";
import { ILoginForm } from "../../../types";
import "./LoginModal.css";
import Button from "../../Button/Button";

const initialState: ILoginForm = {
  email: "",
  password: "",
};

type loginModalProps = {
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RegisterModal({ setShowLoginModal }: loginModalProps) {
  const [inputValues, setInputValues] = useState(initialState) as [
    ILoginForm,
    React.Dispatch<React.SetStateAction<ILoginForm>>
  ];

  const inputsChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setInputValues: React.Dispatch<React.SetStateAction<ILoginForm>>
  ) => {
    setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Действия при отправке формы
    console.log("Login form submitted");
    console.log("email:", inputValues.email);
    console.log("password:", inputValues.password);
    setShowLoginModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            value={inputValues.email}
            onChange={(e) => inputsChangeHandler(e, setInputValues)}
            placeholder="email"
          />
          <br />
          <input
            type="password"
            name="password"
            value={inputValues.password}
            onChange={(e) => inputsChangeHandler(e, setInputValues)}
            placeholder="password"
          />
          <br />
          <Button text="Submit" width="150px" height="40px" />
          <Button
            text="Cancel"
            width="150px"
            height="40px"
            onClick={() => setShowLoginModal(false)}
          />
          {/* <button type="submit">Submit</button>
          <button onClick={() => setShowLoginModal(false)}>Cancel</button> */}
        </form>
      </div>
    </div>
  );
}
