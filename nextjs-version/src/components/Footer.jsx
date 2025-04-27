import React from 'react';
import { Box, Typography, Grid, Button, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(45deg, #1A237E, #4A148C)',
        color: '#fff',
        py: { xs: 4, md: 6 }, // Padding vertical: more on desktop
        px: { xs: 2, md: 4 }, // Padding horizontal: more on desktop
        mt: 'auto', // Push footer to bottom
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* JOSY Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            JOSY
          </Typography>
          {/* <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem', width: '45%' } }}>
            Maecenas bibendum maximus blandit. Sed eget mi rut. Donec hendrerit tincidunt lacinia.
          </Typography> */}
          <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem', width: '55%' } }}>
          Maecenas bibendum maximus blandit. Sed eget mi rut. Donec hendrerit tincidunt lacinia.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#D32F2F',
              color: '#fff',
              fontSize: { xs: '0.8rem', md: '1rem' },
              px: { xs: 2, md: 3 },
              '&:hover': { backgroundColor: '#B71C1C' },
            }}
            // onClick={() => window.open('/online-course', '_self')}
          >
            Online Course
          </Button>
        </Grid>

        {/* Quick Contacts Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            Quick Contacts
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
            ThemeForest, Envato HQ 121 King St, Los Angeles, USA
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
            +8 (465) 989 20 11
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            Quick Links
          </Typography>
          <Link href="/online-courses" color="inherit" underline="hover" sx={{ display: 'block', mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
            Online Courses
          </Link>
          <Link href="/appointment" color="inherit" underline="hover" sx={{ display: 'block', mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
            Appointment
          </Link>
          <Link href="/my-classes" color="inherit" underline="hover" sx={{ display: 'block', mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
            My Classes
          </Link>
          <Link href="/services" color="inherit" underline="hover" sx={{ display: 'block', fontSize: { xs: '0.9rem', md: '1rem' } }}>
            Services
          </Link>
        </Grid>

        {/* Social Media Icons (Desktop Only) */}
        <Grid item xs={12} md={2} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <Link href="https://instagram.com" target="_blank" color="inherit">
            <InstagramIcon sx={{ fontSize: { md: '2rem' } }} />
          </Link>
          <Link href="https://twitter.com" target="_blank" color="inherit">
            <TwitterIcon sx={{ fontSize: { md: '2rem' } }} />
          </Link>
          <Link href="https://youtube.com" target="_blank" color="inherit">
            <YouTubeIcon sx={{ fontSize: { md: '2rem' } }} />
          </Link>
        </Grid>
      </Grid>

      {/* Social Media Icons (Mobile Only) */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 3, gap: 2 }}>
        <Link href="https://instagram.com" target="_blank" color="inherit">
          <InstagramIcon sx={{ fontSize: '1.5rem' }} />
        </Link>
        <Link href="https://twitter.com" target="_blank" color="inherit">
          <TwitterIcon sx={{ fontSize: '1.5rem' }} />
        </Link>
        <Link href="https://youtube.com" target="_blank" color="inherit">
          <YouTubeIcon sx={{ fontSize: '1.5rem' }} />
        </Link>
      </Box>

      {/* Copyright Section */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
          Merkulove © Josy Templates All rights reserved Copyrights 2021
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;