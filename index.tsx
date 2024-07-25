import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const root = createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
