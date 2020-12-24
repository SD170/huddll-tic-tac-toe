import React, { useState } from 'react';

const n=3; //3x3 matrix/tic-tac-toe board

const GameBox = () => {
    const [boxMatrix, setBoxMatrix] = useState([
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ])


    const winnerCheck = () =>{

        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                try{
                    if( (new Set([boxMatrix[i][j],boxMatrix[i][j+1],boxMatrix[i][j+2]])).size === 1 && boxMatrix[i][j] != null &&  typeof(boxMatrix[i][j+2]) !== 'undefined'){
                        console.log(`${boxMatrix[i][j]} wins`);
                        console.log(boxMatrix[i][j]);
                        return boxMatrix[i][j];
                    }
                    if((new Set([boxMatrix[i][j],boxMatrix[i+1][j],boxMatrix[i+2][j]])).size === 1 && boxMatrix[i][j] != null &&  typeof(boxMatrix[i+2][j]) !== 'undefined'){
                        console.log(`${boxMatrix[i][j]} wins`);
                        console.log(boxMatrix[i][j]);
                        return boxMatrix[i][j];
                    }
                    if((new Set([boxMatrix[i][i],boxMatrix[i+1][i+1],boxMatrix[i+2][i+2]])).size === 1 && boxMatrix[i][i] != null &&  typeof(boxMatrix[i+2][i+2]) !== 'undefined'){
                        console.log(`${boxMatrix[i][j]} wins`);
                        console.log(boxMatrix[i][j]);
                        return boxMatrix[i][j];
                    }                    
                    if((new Set([boxMatrix[i+2][i],boxMatrix[i+1][i+1],boxMatrix[i+2][i]])).size === 1 && boxMatrix[i][j] != null &&  typeof(boxMatrix[i+2][i+2]) !== 'undefined'){
                        console.log(`${boxMatrix[i][j]} wins`);
                        console.log(boxMatrix[i][j]);
                        return boxMatrix[i][j];
                    }
                   
                }catch{
                    //do nothing                    
                }
                
            }
        }
    }


    winnerCheck();
    return (
        <div className="game-box">

        </div>
    );
}
 
export default GameBox;