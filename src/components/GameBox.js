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
    }


    const winnerCheck = () =>{

        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                try{
                    if( (new Set([boxMatrix[i][j],boxMatrix[i][j+1],boxMatrix[i][j+2]])).size === 1 && boxMatrix[i][j] != null &&  typeof(boxMatrix[i][j+2]) !== 'undefined'){
                        console.log(`${boxMatrix[i][j]} wins 1`);
                        console.log(boxMatrix[i][j]);
                        let res = boxMatrix[i][j];
                        resetGame();
                        return res;
                    }
                    if((new Set([boxMatrix[i][j],boxMatrix[i+1][j],boxMatrix[i+2][j]])).size === 1 && boxMatrix[i][j] != null &&  typeof(boxMatrix[i+2][j]) !== 'undefined'){
                        console.log(`${boxMatrix[i][j]} wins 2`);
                        console.log(boxMatrix[i][j]);
                        let res=boxMatrix[i][j];
                        resetGame();
                        return res;
                    }
                    if((new Set([boxMatrix[i][i],boxMatrix[i+1][i+1],boxMatrix[i+2][i+2]])).size === 1 && boxMatrix[i][i] != null &&  typeof(boxMatrix[i+2][i+2]) !== 'undefined'){
                        console.log(`${boxMatrix[i][j]} wins 3`);
                        console.log(boxMatrix[i][j]);
                        let res = boxMatrix[i][i];
                        resetGame();
                        return res;
                    }                    
                    if((new Set([boxMatrix[i+2][i],boxMatrix[i+1][i+1],boxMatrix[i][i+2]])).size === 1 && boxMatrix[i+1][i+1] != null &&  typeof(boxMatrix[i+2][i+2]) !== 'undefined'){
                        console.log(`${boxMatrix[i+1][i+1]} wins 4`);
                        let res = boxMatrix[i+1][i+1];
                        resetGame();
                        return res;
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
        tempArray[parseInt(e.target.id%10)-1][parseInt(e.target.id/10)-1] = currentSymbol;
        console.log(boxMatrix[parseInt(e.target.id%10)-1][parseInt(e.target.id/10)-1])
        e.target.className = currentSymbol==='x'?'x icon huge icon':'circle outline huge icon';
        setBoxMatrix(tempArray);
        toggleSymbol();
        e.target.style.pointerEvents = "none";

    }

    return (
        <div className="game-box">
            <div className="ui centered grid">
                <div className="column">
                    <div className="ui three column centered grid">
                        <div className="one wide column"><div className="content border-1"><i id='11' onClick={onGameClick}  className="huge icon"></i></div></div>
                        <div className="one wide column"><div className="content border-1"><i id='12' onClick={onGameClick}  className="huge icon"></i></div></div>
                        <div className="one wide column"><div className="content border-1"><i id='13' onClick={onGameClick}  className="huge icon"></i></div></div>
                    </div>
                    <div className="ui three column centered grid">
                        <div className="one wide column"><div className="content border-1"><i id='21' onClick={onGameClick}  className="huge icon"></i></div></div>
                        <div className="one wide column"><div className="content border-1"><i id='22' onClick={onGameClick}  className="huge icon"></i></div></div>
                        <div className="one wide column"><div className="content border-1"><i id='23' onClick={onGameClick}  className="huge icon"></i></div></div>
                    </div>
                    <div className="ui three column centered grid">
                        <div className="one wide column"><div className="content border-1"><i id='31' onClick={onGameClick}  className="huge icon"></i></div></div>
                        <div className="one wide column"><div className="content border-1"><i id='32' onClick={onGameClick}  className="huge icon"></i></div></div>
                        <div className="one wide column"><div className="content border-1"><i id='33' onClick={onGameClick}  className="huge icon"></i></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default GameBox;