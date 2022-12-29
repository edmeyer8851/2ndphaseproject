import React, {useEffect, useState} from "react";
import Review from "./Review"
import Enterscores from "./Enterscores"

function Snakegame ({games, addNewGame, appScores, addNewScore }) { 

   
    return (
        <div> 
            <Enterscores appScores = {appScores} addNewScore = {addNewScore} />
            <Review games = {games} addNewGame = {addNewGame} />
        </div>

    )
}

export default Snakegame

