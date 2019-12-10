import React from 'react';
import food from './dataset.json'


const fruit = food.filter(value => value.type === "Fruit")
const vegetable = food.filter(value => value.type === "Vegetable")
let isFruits = true
let isVegetable = false


function checkType() {
    if (isFruits === true) {
        return fruit.map((value) => (
            <div className="vegtBox" key={value.id}><span>{value.name}</span><span>{value.stocked_at}</span></div>
        ))
    }
    else if (isVegetable === true) {
        return vegetable.map((value) => (
            <div className="vegtBox" key={value.id}><span>{value.name}</span><span>{value.stocked_at}</span></div>
        ))
    }
    else {
        return food.map((value) => (
            <div className="vegtBox" key={value.id}><span>{value.name}</span><span>{value.stocked_at}</span></div>
        ))
    }
}
export default checkType