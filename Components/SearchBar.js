import React, { useState, useEffect } from "react";
import { Input, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

const SearchBar = ({ history, setHistory }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const toast = useToast();
  const [isClicked, setIsClicked] = useState(false);

  //Window proble after routing undefined localstorage item

  /*useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
    let items = JSON.parse(localStorage.getItem("history"));
    setHistory(items);
  }, [history]);*/

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      setIsClicked(true);
      /*setHistory([...history, search]); */ //fix later
      router.push("/ingredients/" + search);
      setSearch("");
      setIsClicked(false);
    } else {
      toast({
        title: "Please enter a search term",
        status: "warning",
        position: "top-right",
        duration: 2000,
      });
    }
  };
  if (isClicked) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }
  return (
    <Box minW="15rem">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Box display="flex" flex-direction="row" justify="center" gap="1rem">
          <Input
            variant="filled"
            p="1"
            size="lg"
            type="text"
            placeholder="Search Ingredients"
            _placeholder={{ opacity: 1, color: "black" }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            type="submit"
            size="lg"
            colorScheme="teal"
            aria-label="Call Segun"
          >
            Search
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SearchBar;
