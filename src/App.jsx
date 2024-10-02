import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FetchGames from "./components/FetchGames";
import { GameCard } from "./components/Card";
import Cart from "./components/Cart";

function App() {
  const [games, setGames] = useState(null);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (games && games.length > 0) {
      console.log(games[0]);
    }
  }, [games]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FetchGames games={games} setGames={setGames} />{" "}
                <GameCard games={games} cart={cart} setCart={setCart} />
              </>
            }
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
