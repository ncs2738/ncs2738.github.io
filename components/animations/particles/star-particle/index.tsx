import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import * as React from "react";
import { FunctionComponent, useRef, useState } from "react";
import {
  AnimationContext,
  TrailType,
} from "../../../contexts/animation-context";
import "./../particle-animations.scss";

interface PublicProps {
  trailID: number;
}

interface TrailDivProps {
  animationDelay: number;
  animationTime: number;
  animationType: string;
}

/*
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ff0062;
  background: #ff0062;
  transform: translate(25%, -50%);
  position: absolute;
  top: 0;
  left: 0;
*/

const TrailDiv = styled.div<TrailDivProps>`
  transform: translate(25%, -50%);
  position: absolute;
  top: 0;
  left: 0;
  animation: ${(prop) => prop.animationType} linear infinite;
  animation-delay: ${(prop) => prop.animationDelay}s;
  animation-duration: ${(prop) => prop.animationTime}s;
  color: cyan;
`;

export const Trail: FunctionComponent<PublicProps> = ({ trailID }) => {
  const animationCtx = React.useContext(AnimationContext);

  const opacity = `${Math.random() * 0.75 + 0.5}`;
  const dir = Math.random() > 0.5 ? 250 : -250;
  const type = Math.random() > 0.5 ? "starTrail1" : "starTrail2";
  const hMovement = Math.floor(Math.random() * 300 + 25);
  const hTranslation = `${hMovement * dir}`;
  //const hTranslation = `${hMovement}%`;
  const vTranslation = `${Math.floor(Math.random() * 500 + 250)}`;
  //const animationTime = `${Math.random() * 1.25 + 0.5}s`;

  document.body.onkeyup = function (e) {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
      if (animationCtx.activeTrail === TrailType.Diamond) {
        animationCtx.activeTrail = TrailType.None;
      } else {
        animationCtx.activeTrail = TrailType.Diamond;
      }
    }
  };

  const animationID = (trailID % 3) + 1;

  const test = Math.ceil(trailID / 3);

  //swap these two around
  const animationDelay = animationID !== 1 ? 0.65 * test : 0.4 * test;

  const animationTime = 2;

  console.log(
    trailID +
      "- test num: " +
      test +
      " - animID: " +
      animationID +
      " - delay: " +
      animationDelay,
  );

  return (
    <TrailDiv
      animationType={`starTrail${animationID}`}
      animationDelay={animationDelay}
      animationTime={animationTime}
    >
      {animationCtx.activeTrail}
    </TrailDiv>
  );
};
