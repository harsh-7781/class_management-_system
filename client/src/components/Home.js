import React from "react";

const Home = () => {
  const homeStyle = {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "80vh",
  };

  const imageStyle = {
    width: "70%",
    marginTop: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={homeStyle}>
      <h1>Welcome to Class Management</h1>
      <img
        src="https://img.freepik.com/free-vector/flat-background-world-teacher-s-day-celebration_23-2150736746.jpg"
        alt="Students"
        style={imageStyle}
      />
    </div>
  );
};

export default Home;
