import "./App.css";
import foodsData from "./foods.json";
import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";

function App() {
  const [foods, setFoods] = useState(foodsData);
  const addNewFood = (newFood) => {
    setFoods([newFood, ...foods]);
  }
  

  return (
    <div className="App">
      <AddFood add={addNewFood}/>
      <Row className="foodBoxes">
      <Divider><h3><b>Food List</b></h3></Divider>
        <FoodBox data={foods}/>
      </Row>
    </div>
  );
}

export default App;
