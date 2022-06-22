import React from "react";
import { Box, Heading, Circle } from "@chakra-ui/react";
import Pizza from "../public/pizza.png";
import Image from "next/image";

const Headers = () => {
  return (
    <Box
      maxW="80rem"
      mx="auto"
      h="5rem"
      bg="#aec7c9"
      color="white"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      position="relative"
      z="50"
      p={3}
      roundedBottomRight="xl"
      roundedBottomLeft="xl"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="4"
        as="a"
        href="/"
        cursor="pointer"
      >
        <Circle bg="teal" p="1">
          <Image src={Pizza} width="48px" height="48px" objectFit="contain" />
        </Circle>
        <Heading as="h2" color="teal" fontSize="22px">
          INGREDIENTS
        </Heading>
      </Box>
    </Box>
  );
};

export default Headers;
