import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../components/app";
import "./styles.scss";
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
);
