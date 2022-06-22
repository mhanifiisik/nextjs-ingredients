import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const IngredientsDetailsCard = ({ nutrients, name }) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="telegram" border="1">
        <TableCaption variant="top" color="white" border="1" bg="black">
          Nutritions of the {name}
        </TableCaption>
        <Thead bg="black" color="white">
          <Tr>
            <Th color="white" py={5}>
              Name of nutrition
            </Th>
            <Th color="white" py={5}>
              Amount
            </Th>
            <Th color="white" py={5}>
              Unit
            </Th>
            <Th color="white" py={5}>
              % Daily Needs
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {nutrients.slice(0, 10).map((details, index) => (
            <Tr key={index}>
              <Td>{details.name ? details.name : "None"}</Td>
              <Td>{details.amount ? details.amount : "None"}</Td>
              <Td>{details.unit ? details.unit : "None"}</Td>
              <Td>
                {details.percentOfDailyNeeds
                  ? details.percentOfDailyNeeds
                  : "None"}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default IngredientsDetailsCard;
