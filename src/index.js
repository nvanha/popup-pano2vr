import FirebaseContext from "context/firebase";
import { FieldValue, firebase } from "lib/firebase";
import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.scss";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>
);
