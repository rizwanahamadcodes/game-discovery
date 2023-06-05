import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Flex flexGrow="grow" w="100%" overflow="hidden" borderRadius="8px">
      {children}
    </Flex>
  );
};

export default GameCardContainer;
