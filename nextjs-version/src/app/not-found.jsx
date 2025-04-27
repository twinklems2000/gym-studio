"use client"

import { useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const location = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h1" sx={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "16px" }}>
          404
        </Typography>
        <Typography variant="h6" sx={{ color: "#4b5563", marginBottom: "16px" }}>
          Oops! Page not found
        </Typography>
        <Link
          href="/"
          sx={{
            color: "#3b82f6",
            textDecoration: "underline",
            "&:hover": { color: "#1d4ed8" },
          }}
        >
          Return to Home
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;