import React from "react";
import axios from "axios";
import IngredientsDetailCard from "../../../Components/IngredientsDetailsCard";
import IngredientsCard from "../../../Components/IngredientsCard";

const Details = ({ IngredientsDetail }) => {
  const {
    nutrition: { nutrients },
    name,
  } = IngredientsDetail;
  return (
    <div className="max-w-7xl mx-auto min-h-screen grid place-items-center">
      <h1 className="text-xl font-bold italic bg-teal-800 p-2 text-white">
        Nutrientations of the {name}
      </h1>
      <IngredientsDetailCard nutrients={nutrients} />
    </div>
  );
};
export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await axios.get(
    `https://api.spoonacular.com/food/ingredients/${id}/information?amount=1&apiKey=${process.env.API_KEY}`
  );
  const data = await response.data;
  return {
    props: {
      IngredientsDetail: data,
    },
  };
}

export default Details;
