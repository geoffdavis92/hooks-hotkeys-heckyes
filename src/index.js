import React, { useState, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { install, uninstall } from "@github/hotkey";

import "./styles.css";

function getHotkeys(ref = window.document) {
  return ref.querySelectorAll("[data-hotkey]");
}

function App() {
  const rootRef = React.createRef;
  useEffect(() => {
    const hotKeys = getHotkeys(rootRef.current);
    for (const el of hotKeys) {
      install(el);
    }
    return () => {
      for (const el of hotKeys) {
        uninstall(el);
      }
    };
  }, []);
  return (
    <div ref={rootRef} id="app-root">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        data-hotkey="a y"
        onClick={e => {
          alert(e.target.innerText);
        }}
      >
        Ayyyyyy
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
