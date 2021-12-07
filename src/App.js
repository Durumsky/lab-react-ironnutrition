import "./App.css";
import foodsData from "./foods.json";
import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";
import Search from "./components/Search"

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [allFoods, setAllFoods] = useState(foodsData)
  const addNewFood = (newFood) => {
    setFoods([newFood, ...foods]);
  }

  const deleteFood = (deleted) => {
    const sortedAfterDelete =  foods.filter(meal => meal.name !== deleted)
    setFoods([...sortedAfterDelete])
  }

  const filterFoodList = (searchedFood) => {
   const filteredFood = allFoods.filter((meal) => {
      return meal.name.toLowerCase().includes(searchedFood.toLowerCase())
    })
    setFoods([...filteredFood])
  }

 
  

  return (
    <div className="App">
      <Search filterFoodList={filterFoodList}/>
      <AddFood add={addNewFood}/>
      <Row className="foodBoxes" style={{display: 'flex', justifyContent: 'center'}}>
      <Divider><h3><b>Food List</b></h3></Divider>
      {foods.map((food) =>{
        return (
          <FoodBox foods={food} deleteFood={deleteFood}/>
        )
      })}
       
      </Row>
    </div>
  );
}

export default App;
