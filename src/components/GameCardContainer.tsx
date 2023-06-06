import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      boxShadow="0 0 4px 2px rgba(0,0,0,0.1)"
      overflow="hidden"
      border="1px solid rgba(0,0,0,0.2)"
      borderRadius="8px"
      width="100%"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
