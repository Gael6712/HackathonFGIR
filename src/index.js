import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import MusicContextProvider from "./containers/context/ApiMusicContext";

ReactDOM.render(
  <React.StrictMode>
    <MusicContextProvider>
      <Router>
        <App />
      </Router>
    </MusicContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
