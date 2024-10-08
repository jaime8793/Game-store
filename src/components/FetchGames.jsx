import { useEffect } from "react";

function FetchGames({ games, setGames }) {
  const API_KEY = `74553a092ac04cc0a044c7006ffca8ce`;

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await fetch(
          `/games?key=${API_KEY}&page_size=10`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setGames(data.results); 
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    getGames();
  }, []);

  return;
}

export default FetchGames;
