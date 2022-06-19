import React from "react";
import { Icon } from "@chakra-ui/react";
import { SpinnerIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <div className="absolute z-50 w-full left-0 p-10">
      <a className="text-xl text-white uppercase flex flex-row  gap-4" href="/">
        <Icon as={SpinnerIcon} w={8} h={8} color="white" />
        Master Food
      </a>
    </div>
  );
};

export default Header;
