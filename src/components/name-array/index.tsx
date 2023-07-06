import { Box, Text, useColorMode } from "@chakra-ui/react";
import * as React from "react";
import { FunctionComponent } from "react";
import { KalimbaArray } from "../../assets/audio/kalimba notes";
import { PianoArray } from "../../assets/audio/piano keys";
import { SFXArray } from "../../assets/audio/sfx keyboard";
import { AudioPlayerContext } from "../../assets/contexts/audio-player-ctx";
import { NameLetter } from "./name-letter";
import useSound from "use-sound";

interface PublicProps {
  //
  nameArray: string[];
  //
  animationDelay: number;
  //
  //audioArray:
}

export const NameArray: FunctionComponent<PublicProps> = ({
  nameArray,
  animationDelay,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const audioCtx = React.useContext(AudioPlayerContext);

  const noteArray = [KalimbaArray(), PianoArray(), SFXArray()];

  const soundArray = noteArray[audioCtx.audioArrayIndex];

  return (
    <span>
      <audio id="myText" />
      {nameArray.map((char, i) => (
        <NameLetter
          audioEffect={soundArray[i]}
          char={char}
          letterID={i}
          animationDelay={0}
        />
      ))}
    </span>
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
