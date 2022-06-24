import { Box, Text, useColorMode } from "@chakra-ui/react";
import * as React from "react";
import { Star } from "../animations/star";
import { AnimationCtxManager } from "../contexts/animation-context";

export const Pages = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <AnimationCtxManager>
      <Box
        onClick={toggleColorMode}
        // className="grad"
      >
        <h1 className={colorMode}>
          Howdy doo - this is the start of me resume!
        </h1>
        <Text color={colorMode === "light" ? "purple" : "orange"}>agga</Text>
        {Array(4)
          .fill("")
          .map((_, i) => (
            <Star key={`star${i}`} />
          ))}
      </Box>
    </AnimationCtxManager>
  );
};

//        <Text className="text">agga</Text>
