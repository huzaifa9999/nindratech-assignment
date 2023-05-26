import React, { useState } from "react";
import Song from "../../assests/song.jpg";
import "./home.css";
import { PieChart, Pie, Tooltip } from "recharts";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

const Home = () => {
  const data = [
    { name: "Unique Plays", users: 2000 },
    { name: "Total Plays", users: 4000 },
  ];

  return (
    <>
      <h1 className="heading">Your Dashboard</h1>
      <div className="main">
        <div className="container">
          <h1>The tokyo drift</h1>
          <div className="song">
            <img src={Song} alt="img" className="songimg" />
          </div>
        </div>

        <div className="stats">
          <div className="completion">
            <h1>Completion rate</h1>
            <ProgressBar bgcolor={"#3EC050"} completed={60} />
          </div>

          <div className="data">
            <h1>Unique and Totals Plays of the data</h1>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="users"
                isAnimationActive={true}
                data={data}
                cx={200}
                cy={200}
                outerRadius={100}
                fill="#0272CB"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
