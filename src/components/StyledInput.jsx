import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const StyledInput = () => {
  const [fieldFocus, setFieldFocus] = useState(null);
  return (
    <>
      <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2, width: 350 }}>
        <Typography variant="h5" mb={2} textAlign="center">
          2. Input Focus Demo
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="h6">First Name</Typography>
          <TextField
            label="First Name"
            onFocus={() => setFieldFocus("first")}
            onBlur={() => setFieldFocus(null)}
            sx={{
              backgroundColor:
                fieldFocus === "first" ? "primary.main" : "white",
            }}
            size="small"
          />
        </Box>

        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <Typography variant="h6">Last Name</Typography>
          <TextField
            label="Last Name"
            onFocus={() => setFieldFocus("last")}
            onBlur={() => setFieldFocus(null)}
            sx={{
              backgroundColor: fieldFocus === "last" ? "primary.main" : "white",
            }}
            size="small"
          />
        </Box>
      </Box>
    </>
  );
};

export default StyledInput;
