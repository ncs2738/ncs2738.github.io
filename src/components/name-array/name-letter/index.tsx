import { Box, Text, useColorMode } from "@chakra-ui/react";
import * as React from "react";
import { FunctionComponent, useEffect } from "react";
import useSound from "use-sound";

interface PublicProps {
  //
  char: string;
  //
  letterID: number;
  //
  animationDelay: number;
  //
  audioEffect: string;
}

export const NameLetter: FunctionComponent<PublicProps> = ({
  char,
  letterID,
  animationDelay,
  audioEffect,
}) => {
  const [play] = useSound(audioEffect, { volume: 0.5 });

  const playSound = () => {
    play();
  };

  return (
    <Text
      display="inline"
      onClick={playSound}
      //_hover={() => playSound(i)}
      onMouseOver={playSound}
      style={{ WebkitUserSelect: "none" }}
      onKeyDown={(e: { key: string }) => {
        if (e.key == "Enter") {
          playSound();
        }
      }}
    >
      {char}
    </Text>
  );
};
/*
.text-animate {
  display: inline-block;
  opacity: 0;
  animation: bounceIn;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  min-width: 10px;
}

.text-animate-hover {
  min-width: 10px;
  display: inline-block;
  animation-fill-mode: both;

  &:hover {
    animation: rubberBand 1s;
    color: #ffd700;
  }
}

@for $i from 1 through 35 {
  .text-animate._#{$i} {
    animation-delay: #{$i / 10}s;
  }
}

*/
