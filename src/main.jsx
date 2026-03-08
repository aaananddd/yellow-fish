import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/header/index.jsx";
import Footer from "./components/footer/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col min-h-screen">
      <Header />
      <App />
      <Footer />
    </div>
  </StrictMode>,
);
