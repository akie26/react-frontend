import React from "react";
import { Link } from "react-router-dom";

const headerStyle = {
  background: "#000000",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  fontSize: "20px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}
