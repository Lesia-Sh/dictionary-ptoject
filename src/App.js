import React from "react";
import Dictionary from "./Dictionary";
import logo from "./logo.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer text-center">
        This project was coded by{" "}
        <a
          href="https://meek-malabi-7397e3.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Lesia Shevchuk{" "}
        </a>
        and is{" "}
        <a
          href="https://github.com/Lesia-Sh/dictionary-ptoject"
          target="_blank"
          rel="noreferrer noopener"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
