import React from "react";
import Calculator from "./components/Calculator";
import StyledInput from "./components/StyledInput";
import { Box } from "@mui/system";

const App = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Calculator />
      <StyledInput />
    </Box>
  );
};

export default App;
