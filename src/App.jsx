import React, {useState, useEffect} from 'react'
import Die from './Die'
import { nanoid } from 'nanoid';

export default function(){
    function generateDice(){
        return{
            value: Math.floor(Math.random()*6 + 1), 
            isHeld: false,
            key: nanoid()
            }
    }

    function allNewDice(){
        let dice = [];
        for(let i=0; i < 10; i++){
            dice.push(generateDice())
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

    function rollDice(){
        setAllDice(prevDie => 
            prevDie.map(die => {
                return die.isHeld? die : generateDice()
    }))
    }

    const [tenzies, setTenzies] = useState(false);

    useEffect(()=>{
        const allHeld = allDice.every(die => die.isHeld)
        const allSame = allDice.every(die => die.value === allDice[0].value)

        if(allHeld && allSame){
            setTenzies(true)
            console.log('you won!')
        }
    }, [allDice])

    const dieElements = allDice.map(die => <Die 
        key={die.key}
        value = {die.value} 
        isHeld = {die.isHeld} 
        handleClick={() => holdDie(die.key)}
    />);

    return(
        <main>
            <div id="desc">
            <h1>Tenzies!</h1>
            <p>Roll until all dice are the same. <br />Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div id="die-grid">
                {dieElements}
            </div>
            <button id='roll-dice' onClick={rollDice}>{tenzies? "New Game?" : 'Roll'}</button>
        </main>
    )
}