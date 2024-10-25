import React, { Profiler } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/router";

const onRender = (id, phase, actualDuration) => {
  console.log({ id, phase, actualDuration });
};

const App = () => (
  <Profiler id="App" onRender={onRender}>
    <AppRouter />
  </Profiler>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
