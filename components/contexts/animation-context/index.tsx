import * as React from "react";
import { createContext, FC, useState } from "react";

export enum AnimationType {
  None = 0,
  Stars = 1,
}

export enum StarType {
  None = 0,
  Stars = 1,
}

export enum TrailType {
  None = "",
  Diamond = "✦",
}

//star amount
//trail amount
//colors

interface PublicProps {
  children: JSX.Element[] | JSX.Element;
}

export const AnimationContext = createContext({
  activeAnimation: AnimationType.Stars,
  setActivePage: (newAnimation: AnimationType) => {
    return;
  },
  activeStar: StarType.Stars,
  setActiveStar: (newStarType: StarType) => {
    return;
  },
  activeTrail: TrailType.None,
  setActiveTrail: (newTrail: TrailType) => {
    return;
  },
});

export const AnimationCtxManager: FC<PublicProps> = ({ children }) => {
  const [animationType, setAnimationType] = useState(AnimationType.Stars);
  const [starType, setStarType] = useState(StarType.Stars);
  const [trailType, setTrailType] = useState(TrailType.Diamond);
  return (
    <AnimationContext.Provider
      value={{
        activeAnimation: animationType,
        setActivePage: (newAnimation: AnimationType) => {
          setAnimationType(newAnimation);
        },
        activeStar: starType,
        setActiveStar: (newStarType: StarType) => {
          setStarType(newStarType);
        },
        activeTrail: trailType,
        setActiveTrail: (newTrail: TrailType) => {
          setTrailType(newTrail);
        },
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};
