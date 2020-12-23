import React, { useState } from 'react';

const n=3; //3x3 matrix/tic-tac-toe board
const [boxMatrix, setBoxMatrix] = useState([
    [null,null,null],
    [null,null,null],
    [null,null,null]
])

const winnerCheck = () =>{
    if(boxMatrix[j] === boxMatrix[j+1] === boxMatrix[j+2]){
        console.log(`${boxMatrix[j]} wins`;
    }

    // for(let i=0; i<n; i++){
    //     for(let j=0; j<n; j++){
    //     }
    // }
}

const GameBox = () => {
    return (
        winnerCheck
    );
}
 
export default GameBox;