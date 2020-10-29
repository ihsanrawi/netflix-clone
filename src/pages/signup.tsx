import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { FooterContainer, HeaderContainer } from "../containers";
import { Form } from "../components";
import { FirebaseContext } from "../context/Firebase";
import * as ROUTES from "../constants/routes";

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //check form input elements are valid
  const isInValid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // firebase here
    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Text>Log in using user1@mail.com and password as the password to test this site.</Form.Text>
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailAddress(e.target.value)}
            />
            <Form.Input
              type="password"
              autocomplete="off"
              placeholder="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <Form.Submit disabled={isInValid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
