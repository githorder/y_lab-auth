import { useState } from "react";

import "./App.styles.js";

import SignInForm from "./components/sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "./components/sign-up-form/sign-up-form.component.jsx";

import { AuthContainer } from "./App.styles.js";
import Profile from "./components/profile/profile.component.jsx";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {!user ? (
        <AuthContainer>
          <SignInForm setUser={setUser} />
          <SignUpForm setUser={setUser} />
        </AuthContainer>
      ) : (
        <Profile user={user} setUser={setUser} />
      )}
    </>
  );
}

export default App;
