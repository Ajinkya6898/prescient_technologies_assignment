import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

const AsyncComponent = () => {
  const addNumbers = async (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both inputs must be numbers.");
    }
    return a + b;
  };

  useEffect(() => {
    addNumbers(5, 10)
      .then((res) => console.log("Result:", res))
      .catch((err) => console.error("Err:", err.message));

    addNumbers(5, "abc")
      .then((res) => console.log("Result:", res))
      .catch((err) => console.error("Err:", err.message));
  }, []);
  return (
    <>
      <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2, width: 350 }}>
        <Typography variant="h5" mb={2} textAlign="center">
          4. Async Function Please check Console for Results
        </Typography>
      </Box>
    </>
  );
};

export default AsyncComponent;
