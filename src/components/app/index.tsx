import { Box, Image, useColorMode } from "@chakra-ui/react";
import * as React from "react";
import { NameArray } from "../name-array";
import { AudioPlayerCtxManager } from "../../assets/contexts/audio-player-ctx";
import { ContactForm } from "../pages/contact-form";

export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const nameArray = [
    "N",
    "i",
    "c",
    "h",
    "o",
    "l",
    "a",
    "s",
    " S",
    "c",
    "h",
    "n",
    "e",
    "r",
    "i",
    "n",
    "g",
  ];

  return (
    <>
      <AudioPlayerCtxManager>
        <h1 className={colorMode} onClick={toggleColorMode}>
          Howdy doo - this is the start of me resume!
        </h1>
        <Box>
          <NameArray nameArray={nameArray} animationDelay={0} />
        </Box>
      </AudioPlayerCtxManager>
      <ContactForm />
    </>
  );
};

/*
        <h1 className={colorMode} onClick={toggleColorMode}>
          Howdy doo - this is the start of me resume!
        </h1>

                <audio controls>
          <source
            src="https://github.com/SH20RAJ/YouTubeUpload/raw/main/Ark.mp3"
            type="audio/ogg"
          />
        </audio>
*/
