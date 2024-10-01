import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import FetchGames from "./components/FetchGames";
import { GameCard } from "./components/Card";

function App() {
  const [games, setGames] = useState(null);
  useEffect(() => {
    if (games && games.length > 0) {
      console.log(games[0]);
    }
  }, [games]);

  return (
    <>
      <Navbar />
      <FetchGames games={games} setGames={setGames} />
      <GameCard games={games} />
    </>
  );
}

export default App;
