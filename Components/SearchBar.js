import React, { useState, useEffect } from "react";
import { Input, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

const SearchBar = ({ history, setHistory }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const toast = useToast();

  /*useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
    let items = JSON.parse(localStorage.getItem("history"));
    setHistory(items);
  }, [history]);*/

  const handleClick = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      /*setHistory([...history, search]); */ //fix later
      router.push("/ingredients/" + search);

      setSearch("");
    } else {
      toast({
        title: "Please enter a search term",
        status: "warning",
        position: "top-right",
        duration: 2000,
      });
    }
  };
  return (
    <Box minW="15rem">
      <form onSubmit={(e) => handleClick(e)}>
        <Box display="flex" flex-direction="row" justify="center" gap="1rem">
          <Input
            variant="outline"
            p="1"
            size="lg"
            type="text"
            placeholder="Search Ingredients"
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
