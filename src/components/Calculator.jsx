import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  function handleSum() {
    if (num1 === "" || num2 === "") {
      setError("Error: Please enter both the numbers.");
      return;
    }

    setResult(Number(num1) + Number(num2));
  }

  return (
    <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2, width: 350 }}>
      <Typography variant="h5" mb={2} textAlign="center">
        1. Simple Calculator
      </Typography>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography variant="h6">Number 1</Typography>
        <TextField
          size="small"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter number 1 here"
          type="number"
        />
      </Box>
      <Box display="flex" alignItems="center" gap={2} mt={2}>
        <Typography variant="h6">Number 2</Typography>
        <TextField
          size="small"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter number 2 here"
          type="number"
        />
      </Box>
      <Button
        sx={{ display: "block", mx: "auto", my: 2 }}
        variant="contained"
        onClick={handleSum}
      >
        +
      </Button>
      {error && (
        <Typography color="error" mb={2} variant="h6">
          {error}
        </Typography>
      )}
      <Box display="flex" alignItems="center" gap={2}>
        <Typography variant="h6">Result</Typography>
        <TextField
          size="small"
          value={result}
          InputProps={{ readOnly: true }}
        />
      </Box>
    </Box>
  );
};

export default Calculator;
