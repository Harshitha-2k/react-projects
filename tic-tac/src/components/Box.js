import React from 'react';
import { useState } from 'react'
import Square from './Square';

const Box = ()=>{
  const [number,setNumber] = useState(Array(9));
  const [firstply,setFirstplay] = useState(true);
  const [reset, setReset] = useState();

const handleClick = (index)=>{
const player = [...number];
player[index] = firstply ? "X":"O";
setNumber(player);
setFirstplay(!firstply);
}

const wins = winner();
let status;
if(wins){
  status = "winner : " + wins;
}

const handlerClick = ()=>{
setReset(null);
setNumber(Array(9));
}


function winner(){
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  if (number[a] && number[a] === number[b] && number[a] === number[c]) {
    return number[a];
  }
}
return null;
}

  return (
      <div>
        <div className='box'>
        <Square onClick={() => handleClick(0)}  value = {number[0]} />
        <Square onClick={() => handleClick(1)}  value = {number[1]} />
        <Square onClick={() => handleClick(2)}  value = {number[2]} />
        </div>
        <div className='box'>
          <Square onClick={() => handleClick(3)}  value = {number[3]} />
          <Square onClick={() => handleClick(4)}  value = {number[4]} />
          <Square onClick={() => handleClick(5)}  value = {number[5]} />
        </div>
        <div className='box'>
          <Square onClick={() => handleClick(6)}  value = {number[6]} />
          <Square onClick={() => handleClick(7)}  value = {number[7]} />
          <Square onClick={() => handleClick(8)}  value = {number[8]} />
        </div>
        <div className='button'>
          <button onClick={()=> handlerClick()}>PLAY AGAIN</button>
          {status}
          </div>
    </div>
  )
}

export default Box