import React, { useState } from 'react';

const n=3; //3x3 matrix/tic-tac-toe board

const GameBox = () => {
    const [boxMatrix, setBoxMatrix] = useState([
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ])

    const [currentSymbol, setCurrentSymbol] = useState('x');
    const toggleSymbol = () =>{
        if(currentSymbol==='x'){
            setCurrentSymbol('o')
        }else{
            setCurrentSymbol('x');
        }
    }

    const resetGame = () =>{
        setBoxMatrix([
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ])

        window.location.reload();
    }


    const winnerCheck = () =>{

        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                try{
                    if( (new Set([boxMatrix[i][j],boxMatrix[i][j+1],boxMatrix[i][j+2]])).size === 1 && boxMatrix[i][j] != null &&  typeof(boxMatrix[i][j+2]) !== 'undefined'){
                        // console.log(`${boxMatrix[i][j]} wins 1`);
                        alert(`${boxMatrix[i][j]} wins the game`);
                        resetGame();
                        return;
                    }
                    if((new Set([boxMatrix[i][j],boxMatrix[i+1][j],boxMatrix[i+2][j]])).size === 1 && boxMatrix[i][j] != null &&  typeof(boxMatrix[i+2][j]) !== 'undefined'){
                        // console.log(`${boxMatrix[i][j]} wins 2`);
                        alert(`${boxMatrix[i][j]} wins the game`);
                        resetGame();
                        return;
                    }
                    if((new Set([boxMatrix[i][i],boxMatrix[i+1][i+1],boxMatrix[i+2][i+2]])).size === 1 && boxMatrix[i][i] != null &&  typeof(boxMatrix[i+2][i+2]) !== 'undefined'){
                        // console.log(`${boxMatrix[i][j]} wins 3`);
                        alert(`${boxMatrix[i][j]} wins the game`);
                        resetGame();
                        return;
                    }                    
                    if((new Set([boxMatrix[i+2][i],boxMatrix[i+1][i+1],boxMatrix[i][i+2]])).size === 1 && boxMatrix[i+1][i+1] != null &&  typeof(boxMatrix[i+2][i+2]) !== 'undefined'){
                        // console.log(`${boxMatrix[i+1][i+1]} wins 4`);
                        alert(`${boxMatrix[i][j]} wins the game`);
                        resetGame();
                        return;
                    }
                    if(!boxMatrix[i].includes(null) && !boxMatrix[i+1].includes(null) && !boxMatrix[i+2].includes(null)){
                        alert(`Game was a draw`);
                        resetGame();
                        return;
                    }
                   
                }catch{
                    //do nothing                    
                }
                
            }
        }
    }

    winnerCheck();

    const onGameClick =(e)=>{
        const tempArray = boxMatrix;
        tempArray[parseInt(e.target.id/10)-1][parseInt(e.target.id%10)-1] = currentSymbol;
        e.target.className = currentSymbol==='x'?'x icon huge icon':'circle outline huge icon';
        setBoxMatrix(tempArray);
        toggleSymbol();
        e.target.style.pointerEvents = "none";

    }

    return (
        <div className="center game-box">
            <h1 style={{textAlign:'center'}}>Tic-Tac-Toe</h1>
            <div className="grid">
                <div className="row">
                    <div className="cell"><i id='11' onClick={onGameClick}  className="huge icon"></i></div>
                    <div className="cell"><i id='12' onClick={onGameClick}  className="huge icon"></i></div>
                    <div className="cell"><i id='13' onClick={onGameClick}  className="huge icon"></i></div>
                </div>
                <div className="row">
                    <div className="cell"><i id='21' onClick={onGameClick}  className="huge icon"></i></div>
                    <div className="cell"><i id='22' onClick={onGameClick}  className="huge icon"></i></div>
                    <div className="cell"><i id='23' onClick={onGameClick}  className="huge icon"></i></div>
                </div>
                <div className="row">
                    <div className="cell"><i id='31' onClick={onGameClick}  className="huge icon"></i></div>
                    <div className="cell"><i id='32' onClick={onGameClick}  className="huge icon"></i></div>
                    <div className="cell"><i id='33' onClick={onGameClick}  className="huge icon"></i></div>
                </div>
            </div>
        </div>
    );
}
 
export default GameBox;