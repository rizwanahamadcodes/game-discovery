import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="orange">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="tomato">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
