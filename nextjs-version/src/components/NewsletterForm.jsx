"use client";

import { Box, TextField, Typography, IconButton } from "@mui/material";
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { toastService } from "@/utills/config";


const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail(''); 
    toastService.success("Newsletter subscription submitted");
  };

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 }, textAlign: 'left' }}>
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: '1.8rem', md: '2.5rem' },
          fontWeight: 'bold',
          color: '#1A237E', 
        }}
      >
        Choose the best plan according to your choice
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          color: '#666',
          fontSize: { xs: '0.9rem', md: '1rem' },
          maxWidth: { xs: '100%', md: '500px' },
        }}
      >
        Cras quis auctor id orci euismod molestie sit amet blandit nulla. Phasellus convallis laoreet augue in efficitur. Aliquam vitae conv
      </Typography>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: { xs: '100%', md: '400px' },
          background: '#1A2A6C',
          borderRadius: '4px',
        }}
      >
        <TextField
          placeholder="Enter email"
          variant="standard" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{
            flexGrow: 1,
            mr: 1,
            px: 1,
            '& .MuiInputBase-input': {
              border: 'none',
              borderBottom: '2px solid #1A237E', 
              borderRadius: 0,
              padding: '8px 0',
              fontSize: { xs: '0.9rem', md: '1rem' },
              color: '#ffffff',
            },
            '& .MuiInput-underline:before': {
              borderBottom: 'none', 
            },
            '& .MuiInput-underline:after': {
              borderBottom: 'none', 
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottom: 'none', 
            },
          }}
        />
        <IconButton
          type="submit"
          sx={{
            backgroundColor: '#D32F2F', 
            color: '#fff',
            borderRadius: '4px',
            width: 40,
            height: 40,
            '&:hover': {
              backgroundColor: '#B71C1C', 
            },
          }}
        >
          <SendIcon sx={{transform: 'rotate(-40deg)', mb: 1, ml: 0.5}} fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NewsletterForm;