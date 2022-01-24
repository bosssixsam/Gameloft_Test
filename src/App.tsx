import React from "react";
// import logo from './logo.svg';

import Header from "components/layouts/header";
import Content from "components/layouts/content";

import "./assets/styles/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      {/* <section style={{ width: "100vw", height: "100vh", background: "red" }}></section> */}
      {/* <section style={{ width: "100vw", height: "100vh", background: "blue" }}></section> */}
      {/* <section style={{ width: "100vw", height: "100vh", background: "yellow" }}></section> */}
      {/* <section style={{ width: "100vw", height: "100vh", background: "orange" }}></section> */}
    </div>
  );
}

export default App;
