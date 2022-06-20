import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
const HistoryModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Click to See Search History
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your search history is:</DrawerHeader>
          <DrawerBody>
            <ul>
              {["banana", "apple", "lemon", "watermelon"].map((item, index) => (
                <li
                  className="text-lg py-1 capitalize hover:text-purple-800 hover:font-bold cursor-pointer"
                  key={index}
                  href={"/ingredients/" + item}
                >
                  {index + 1}: {item}
                </li>
              ))}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HistoryModal;
