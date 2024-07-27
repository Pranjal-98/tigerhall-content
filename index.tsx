import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import theme from "./src/theme/theme";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
