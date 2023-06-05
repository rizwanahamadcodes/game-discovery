import {
  Button,
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, loading } = useGenres();

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <List>
          {data.map((genre) => (
            <ListItem key={genre.id} paddingY="8px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius="8px"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  fontSize="lg"
                  variant="link"
                  onClick={() => onSelectGenre(genre)}
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
