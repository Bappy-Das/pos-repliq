/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/homePage";
import AuthProvider from "./context/AuthProvider.jsx";
function App() {
  return (
    <>
      <AuthProvider>
        <HomePage></HomePage>
      </AuthProvider>
    </>
  );
}

export default App;
