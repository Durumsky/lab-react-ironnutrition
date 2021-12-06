import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import FoodBox from "./FoodBox";

export default function AddFood(props) {


  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState();
  const [servings, setServings] = useState();
  

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };
    props.add(newFood)
    setName("");
    setImage("");
    setCalories();
    setServings();
    
  };

 
  return (
    <>
      <Divider>
        <h3>
          <b>Add Food Entry</b>
        </h3>
      </Divider>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <Input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Add name here"
        />

        <label>Image</label>
        <Input
          type="text"
          value={image}
          onChange={handleImage}
          placeholder="Insert image link here"
        />

        <label>Calories</label>
        <Input
          type="number"
          value={calories}
          onChange={handleCalories}
          placeholder="Add calories here"
        />

        <label>Servings</label>
        <Input
          type="number"
          value={servings}
          onChange={handleServings}
          placeholder="Add servings here"
        />

        <button type="submit">Add food</button>
      </form>
    </>
  );
}
