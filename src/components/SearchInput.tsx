import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => (
  <InputGroup marginX={20}>
    <InputLeftElement pointerEvents="none">
      <BsSearch color="gray" />
    </InputLeftElement>
    <Input type="tel" placeholder="Search games..." borderRadius={100} />
  </InputGroup>
);

export default SearchInput;
