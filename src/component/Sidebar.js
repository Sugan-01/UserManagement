import React from "react";

const sidebarStyles = {
  container: {
    width: "240px",
    backgroundColor: "#1e3a8a",
    color: "white",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
};

const Sidebar = () => {
  return (
    <aside style={sidebarStyles.container}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>My App</h2>
      <a href="/" style={sidebarStyles.link}>Home</a>
      <a href="/about" style={sidebarStyles.link}>About</a>
      {/* Add more links here */}
    </aside>
  );
};

export default Sidebar;
