<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
>>>>>>> 0b99d680475d2f7995c2745336279a4ad354d91b

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
    <StrictMode>
      <App />
    </StrictMode>
    
  </BrowserRouter>
);
