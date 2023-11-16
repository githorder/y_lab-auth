/* eslint-disable react/prop-types */

import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  SignInFormContainer,
  SignInSubTitle,
  SignInTitle,
  BtnGroup,
} from "./sign-in-form.styles";

const initFormFields = {
  email: "",
  password: "",
};

const SignInForm = ({ setUser }) => {
  const [formFields, setFormFields] = useState(initFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(initFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const { user } = await response.json();
    setUser(user);
    window.localStorage.setItem("user", String(user.id));

    resetForm();
  };

  return (
    <SignInFormContainer>
      <SignInTitle>Already have an account?</SignInTitle>
      <SignInSubTitle>Sign in with email and password</SignInSubTitle>
      <form onSubmit={handleSubmit}>
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
        <BtnGroup>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
            Sign In
          </Button>
        </BtnGroup>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
