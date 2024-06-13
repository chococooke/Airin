import React from "react"
import { createRoot } from "react-dom/client"
import "./css/main.css";
import App from "./App";

const div = document.getElementById("root");
const root = createRoot(div);
root.render(<App />)