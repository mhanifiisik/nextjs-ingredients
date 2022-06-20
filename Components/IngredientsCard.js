import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const IngredientsCard = ({ props }) => {
  const router = useRouter();
  const { id, name, image } = props;
  let imageUrl = `https://spoonacular.com/cdn/ingredients_500x500/${image}`;
  return (
    <div
      onClick={() => router.push(`/ingredients/details/${id}`)}
      className="h-80 border border-white rounded-lg bg-white p-5 flex flex-col gap-5 hover:shadow-2xl hover:cursor-pointer"
    >
      <div className="w-full h-48 relative">
        <Image
          alt="ingredients"
          src={imageUrl}
          layout="fill"
          objectFit="contain"
          priority="true"
        />
      </div>
      <h1 className="text-lg font-bold grid place-items-center rounded-xl capitalize text-white h-12 bg-[#5f61a3]">
        {name}
      </h1>
    </div>
  );
};

export default IngredientsCard;
