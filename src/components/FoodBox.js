import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

export default function FoodBox({foods, deleteFood}) {

    
  return (
 
      
          <Col>
         
            <Card
            key={foods._id}
            title={foods.name}
            style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={foods.image} height={60} />
              <p>Calories: {foods.calories}</p>
              <p>Servings: {foods.servings}</p>
              <p>
                <b>Total Calories:</b> {foods.calories * foods.servings}  kcal
              </p>
              <Button type="primary" onClick={() => deleteFood(foods.name)}> Delete </Button>
            </Card>
          </Col>
       
  
  );
}
