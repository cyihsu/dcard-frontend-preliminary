import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import * as serviceWorker from "./serviceWorker";
import { UIContextProvider } from "./contexts/UIContext";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

/*ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UIContextProvider>
      <App />
    </UIContextProvider>
  </React.StrictMode>
);*/
ReactDOM.render(
  <React.StrictMode>
    <UIContextProvider>
      <Router>
        <App />
      </Router>
    </UIContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
