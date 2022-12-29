import React, {useState, useEffect} from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";// import Header from "./Header";
import NavBar from "./NavBar"
import Snakegame from "./Snakegame"
import Breakout from "./Breakout"
// import PlantPage from "./PlantPage";

function App() {

  const [games, setGames] = useState ([])
  const [appScores, setAppScores] = useState ([])

  useEffect (() => {
    fetch ("http://localhost:6001/games")
    .then (resp => resp.json())
    .then (setGames)
  }, [])

  const addNewGame = (myGame) => {
    setGames([...games, myGame])
  }

  const addNewScore = (myScore) => {
    setAppScores([...appScores, myScore.scores])
  }

  return (
   <BrowserRouter>
    <div>
      <h3> Retro Games </h3>
      <NavBar /> 
    </div>
    <div> 
      <Switch> 
        <Route path = "/snakegame">
          <Snakegame games = {games} addNewGame = {addNewGame} appScores = {appScores} addNewScore = {addNewScore}/>
        </Route>
        <Route path = "/breakout">
          <Breakout />
        </Route>

      </Switch>
    </div>
   </BrowserRouter>
  );
}

export default App;
