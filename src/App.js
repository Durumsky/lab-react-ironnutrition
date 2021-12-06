import "./App.css";
import foodsData from "./foods.json";
import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import FoodBox from "./components/FoodBox";

function App() {
  const [meal, setMeal] = useState(foodsData);
  console.log(foodsData);

  return (
    <div className="App">
      <Row className="foodBoxes">
      <Divider><h3><b>Food List</b></h3></Divider>
        <FoodBox />
      </Row>
    </div>
  );
}

export default App;
