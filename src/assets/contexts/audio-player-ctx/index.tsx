import * as React from "react";
import { createContext } from "react";

export enum AudioArray {
  Kalimba = 0,
  Piano = 1,
  SFX = 2,
}

interface PublicProps {
  children: React.ReactNode;
}

export const AudioPlayerContext = createContext({
  isMuted: false,
  muteAudio: (setMuted: boolean) => {
    return;
  },
  audioArrayIndex: 0,
  setAudioArray: (audioIdx: number) => {
    return;
  },
  //need to add onclick for audio
});

export const AudioPlayerCtxManager: React.FC<PublicProps> = ({ children }) => {
  const [isAudioMuted, setIsAudioMuted] = React.useState(false);
  const [noteIndex, setNoteIndex] = React.useState(AudioArray.Kalimba);

  return (
    <AudioPlayerContext.Provider
      value={{
        isMuted: isAudioMuted,
        muteAudio: (setMuted: boolean) => {
          setIsAudioMuted(setMuted);
        },
        audioArrayIndex: noteIndex,
        setAudioArray: (audioIdx: AudioArray) => {
          setNoteIndex(audioIdx);
        },
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};
