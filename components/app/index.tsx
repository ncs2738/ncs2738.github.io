import { useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";
import { Pages } from "../pages";
import { SiteCtxManager } from "../contexts/site-context";

export const App: FC = () => {
  const { colorMode } = useColorMode();
  document.body.className = colorMode;

  return (
    <SiteCtxManager>
      <Pages />
    </SiteCtxManager>
  );
};
