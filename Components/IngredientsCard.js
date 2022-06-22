import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, GridItem, Heading } from "@chakra-ui/react";

const IngredientsCard = ({ props }) => {
  const router = useRouter();
  const { id, name, image } = props;
  let imageUrl = `https://spoonacular.com/cdn/ingredients_500x500/${image}`;
  return (
    <GridItem
      h="20rem"
      bg="white"
      p={5}
      display="flex"
      flexDirection="column"
      gap={5}
      rounded="lg"
      _hover={{ boxShadow: "xl" }}
      cursor="pointer"
      onClick={() => router.push(`/ingredients/details/${id}`)}
    >
      <Box w="100%" h="12rem" position="relative">
        <Image
          alt="ingredients"
          src={imageUrl}
          layout="fill"
          objectFit="contain"
          priority="true"
        />
      </Box>
      <Heading
        as="h1"
        rounded="lg"
        fontSize="lg"
        textTransform="capitalize"
        color="white"
        bg="purple.500"
        p={2}
        textAlign="center"
      >
        {name}
      </Heading>
    </GridItem>
  );
};

export default IngredientsCard;
