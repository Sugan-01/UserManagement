import React from "react";
import Sidebar from "./Sidebar";

const layoutStyles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f2f2f2",
  },
  main: {
    flex: 1,
    padding: "2rem",
  },
  contentBox: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "1.5rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  },
};

const Layout = ({ children }) => {
  return (
    <div style={layoutStyles.container}>
      <Sidebar />
      <main style={layoutStyles.main}>
        <div style={layoutStyles.contentBox}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
