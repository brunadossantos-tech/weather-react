import React from "react";
import Weather from "./Search";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Lisbon"/>
    </div></div>
  );
}
