import React from "react";
import IngredientsCard from "../../Components/IngredientsCard";
import axios from "axios";
import SearchBar from "../../Components/SearchBar";

const Index = ({ ingredients }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="mt-20">
        <div className="w-[30rem]">
          <SearchBar />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-7 gap-x-2 mt-10">
          {ingredients.map((ingredient) => (
            <IngredientsCard props={ingredient} key={ingredient.id} />
          ))}
        </div>
      </div>
    </div>
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
