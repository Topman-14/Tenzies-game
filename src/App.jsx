import React, {useState, useEffect} from 'react'
import Die from './Die'

export default function(){

    function allNewDice(){
        let diceNums = [];

        for(let i=0; i < 10; i++){
            diceNums.push(Math.floor(Math.random()*6 + 1))
        }

        return diceNums
    }
    
    const [dieNums, setDieNums] = useState(allNewDice())

    const dieElements = dieNums.map(num => <Die value = {num}/>);

    function rollDice(){
        setDieNums(allNewDice)
    }

    return(
        <main>
            <div id="desc">
            <h1>Tenzies</h1>
            <p>hellooooo</p>
            </div>
            <div id="die-grid">
                {dieElements}
            </div>
            <button id='roll-dice' onClick={rollDice}>Roll</button>
        </main>
    )
}