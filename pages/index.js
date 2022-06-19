import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import Image from "next/image";
import Pizza from "../public/pizzaguyR.png";
import { Box, Flex, Heading, Container, Button } from "@chakra-ui/react";
import HistoryModal from "../Components/HistoryModal";

export default function Home() {
  const [history, setHistory] = useState(["banana"]);
  return (
    <Box w="100vw" className="landing-container">
      <Box
        maxW="80rem"
        minH="100vh"
        mx="auto"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <Flex
          w="50%"
          h="30rem"
          direction="column"
          gap={10}
          justifyContent="center"
          p={4}
          rounded="lg"
        >
          <Heading as="h1" color="white" size="2xl">
            Explore the Ingredients
          </Heading>
          <Container color="white" centerContent="true">
            Search for simple whole foods such as fruits, vegetables, nuts,
            grains
          </Container>
          <SearchBar history={history} setHistory={setHistory} />
          <HistoryModal />
        </Flex>
        <Box w="50%" h="30rem" position="relative" className="hidden md:block">
          <Image
            src={Pizza}
            layout="fill"
            priority="true"
            objectFit="cover"
            alt="pizzaguy"
          />
        </Box>
      </Box>
    </Box>
  );
}
