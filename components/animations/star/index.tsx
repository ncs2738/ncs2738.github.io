import { Box } from "@chakra-ui/react";
import * as React from "react";
import { Trail } from "../particles/star-particle";

export const Star = () => {
  return (
    <Box className="star">
      {Array(10)
        .fill("")
        .map((_, i) => (
          <Trail key={`starTrail${i + 1}`} trailID={i + 1} />
        ))}
    </Box>
  );
};
