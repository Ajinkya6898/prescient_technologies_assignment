import { Box, Typography } from "@mui/material";

const ImageZoom = () => {
  return (
    <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2, width: 350 }}>
      <Typography variant="h5" mb={2}>
        3. Image Zoom
      </Typography>

      <Box>
        <Box
          component="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dGWQgdRtlbW5aRFnN5K5pjTRSFsVWuGf7A&s"
          alt="nature"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.5)",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ImageZoom;
