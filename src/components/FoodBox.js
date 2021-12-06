import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

export default function FoodBox(props) {
    
  return (
    <>
      {props.data.map((food) => {
        return (
          <Col>
         
            <Card
            key={food._id}
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={food.image} height={60} />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>
                <b>Total Calories:</b> {food.calories * food.servings}  kcal
              </p>
              <Button type="primary"> Delete </Button>
            </Card>
          </Col>
        );
      })}
    </>
  );
}
