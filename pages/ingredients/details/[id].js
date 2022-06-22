import React from "react";
import axios from "axios";
import IngredientsDetailCard from "../../../Components/IngredientsDetailsCard";
import { Box } from "@chakra-ui/react";

const Details = ({ IngredientsDetail }) => {
  const {
    nutrition: { nutrients },
    name,
  } = IngredientsDetail;
  return (
    <Box maxW="80rem" minH="90vh" mx="auto" display="grid" placeItems="center">
      <IngredientsDetailCard nutrients={nutrients} name={name} />
    </Box>
  );
};
export async function getServerSideProps({ params }) {
  const response = await axios.get(
    `https://api.spoonacular.com/food/ingredients/${params.id}/information?amount=1&apiKey=${process.env.API_KEY}`
  );
  const data = await response.data;
  return {
    props: {
      IngredientsDetail: data,
    },
  };
}

export default Details;
