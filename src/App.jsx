import React, {useState, useEffect} from 'react'
import Die from './Die'

export default function(){

    function allNewDice(){
        let dice = [];
        for(let i=0; i < 10; i++){
            dice.push({
                value: Math.floor(Math.random()*6 + 1), 
                isHeld: false,
                key: i
            })
        }
        return dice
    }

    const [allDice, setAllDice] = useState(allNewDice())

    function holdDie(id){
        setAllDice(prevDie => 
            prevDie.map(die => (
                die.key == id? { ...die, isHeld:!die.isHeld} 
                : die
            ))
        )
    }
    

    const dieElements = allDice.map(die => <Die 
        value = {die.value} 
        isHeld = {die.isHeld} 
        handleClick={() => holdDie(die.key)}
    />);

    function rollDice(){
        setAllDice(allNewDice)
    }

    return(
        <main>
            <div id="desc">
            <h1>Tenzies!</h1>
            <p>Roll until all dice are the same. <br />Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div id="die-grid">
                {dieElements}
            </div>
            <button id='roll-dice' onClick={rollDice}>Roll</button>
        </main>
    )
}