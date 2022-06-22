import React from "react";
import IngredientsCard from "../../Components/IngredientsCard";
import axios from "axios";
import SearchBar from "../../Components/SearchBar";
import { Box, Grid, Heading } from "@chakra-ui/react";

const Index = ({ ingredients }) => {
  return (
    <Box maxW="80rem" mx="auto" minH="90vh">
      <Box display="flex" flexDirection="column" gap="4rem">
        <Box w="30rem">
          <SearchBar />
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(5,1fr)",
          }}
          gap={6}
        >
          {ingredients.map((ingredient) => (
            <IngredientsCard props={ingredient} key={ingredient.id} />
          ))}
        </Grid>
        {ingredients.length === 0 && (
          <Heading as="h1" fontSize="24px" color="white">
            No ingredients
          </Heading>
        )}
      </Box>
    </Box>
  );
};
export async function getServerSideProps({ params }) {
  const response = await axios.get(
    `https://api.spoonacular.com/food/ingredients/search?query=${params.id}&apiKey=${process.env.API_KEY}`
  );
  const data = await response.data.results;
  return {
    props: {
      ingredients: data,
    },
  };
}

export default Index;
