import React, { useState } from "react";

import Graficas from "../../components/Grafica/index";
import Login from "../../components/Login/LoginEstudiantes";

import firebaseApp from "../../firebase/firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUser(usuarioFirebase);
    } else {
      setUser(null);
    }
  });

  return <>{user ? <Graficas /> : <Login />}</>;
}

export default App;