import { useColorMode } from "@chakra-ui/react";
import * as React from "react";

export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <h1 className={colorMode} onClick={toggleColorMode}>
        Howdy doo - this is the start of me resume!
      </h1>
    </>
  );
};
