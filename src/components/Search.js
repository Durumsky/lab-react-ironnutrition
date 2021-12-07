import React, {useState} from 'react'
import { Card, Row, Col, Divider, Input, Button } from "antd";

export default function Search({filterFoodList}) {

    const [foodName, setFoodName] = useState('')

    const handleSearch = (event) => {
        setFoodName(event.target.value);
        filterFoodList(event.target.value)
    }   
    return (
        <div>
        <Divider><h3><b>Search</b></h3></Divider>
        <form onChange={handleSearch}>
            <Input type="text" style={{width: 800, marginLeft: 10}} placeholder='Search for food' value={foodName}></Input>
        </form>

            
        </div>
    )
}
