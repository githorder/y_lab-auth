/* eslint-disable react/prop-types */

import { useState } from "react";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import {
  SignUpFormContainer,
  SignUpTitle,
  SignUpSubTitle,
  FormErrorText,
} from "./sign-up-form.styles";

const initFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ setUser }) => {
  const [formFields, setFormFields] = useState(initFormFields);
  const [error, setError] = useState("");
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(initFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, displayName }),
      });

      const data = await response.json();

      if (typeof data === "string") {
        setError(data);
        return;
      }

      setError("");

      const { user } = data;
      setUser(user);
      window.localStorage.setItem("user", String(user.id));

      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignUpFormContainer>
      <SignUpTitle>Don&apos;t have an account?</SignUpTitle>
      <SignUpSubTitle>Sign up with email and password</SignUpSubTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          onChange={handleChange}
          type="text"
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        {error && <FormErrorText>{error}</FormErrorText>}
        <Button type="submit">Sign up</Button>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
