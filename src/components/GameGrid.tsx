import {
  Card,
  CardBody,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./gameCardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing="8px"
        padding="8px"
      >
        {games.map((game) => {
          return loading ? (
            <GameCardSkeleton key={game.id} />
          ) : (
            <GameCard key={game.id} game={game} />
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
