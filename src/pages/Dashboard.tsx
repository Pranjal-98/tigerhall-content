import React from "react";
import "./index.css";
import NavBar from "../components/NavBar/navBar";
import CardGrid from "../components/CardGrid/cardGrid";

const Dashboard: React.FC = () => {
  return (
    <div>
      <NavBar />
      <CardGrid />
    </div>
  );
};

export default Dashboard;
