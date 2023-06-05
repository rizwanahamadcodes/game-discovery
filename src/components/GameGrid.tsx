import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {loading ? (
          <Text>Loading</Text>
        ) : (
          games.map((game) => <li key={game.id}>{game.name}</li>)
        )}
      </ul>
    </>
  );
};

export default GameGrid;
