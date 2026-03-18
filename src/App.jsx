import React from "react";
import Calculator from "./components/Calculator";
import StyledInput from "./components/StyledInput";
import { Box } from "@mui/system";
import ImageZoom from "./components/ImageZoom";
import AsyncComponent from "./components/AsyncComponent";

const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      alignItems="center"
      justifyContent="center"
    >
      <Calculator />
      <StyledInput />
      <ImageZoom />
      <AsyncComponent />
    </Box>
  );
};

export default App;
