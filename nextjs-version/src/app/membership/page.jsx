"use client";

import { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const programsData = [
  {
    title: "Full Body Workout (Group Classes)",
    description: "A comprehensive group workout to improve strength and endurance.",
    price: 99,
    duration: "30 days",
    type: "Group Classes",
    image: "https://via.placeholder.com/300x200?text=Full+Body+Workout",
  },
  {
    title: "Personal Training Session",
    description: "One-on-one training with a certified coach tailored to your goals.",
    price: 199,
    duration: "45 days",
    type: "Personal Training",
    image: "https://via.placeholder.com/300x200?text=Personal+Training",
  },
  {
    title: "Online Yoga Classes",
    description: "Join our virtual yoga sessions to improve flexibility and reduce stress.",
    price: 49,
    duration: "15 days",
    type: "Online",
    image: "https://via.placeholder.com/300x200?text=Online+Yoga",
  },
  {
    title: "HIIT Group Classes",
    description: "High-intensity interval training in a group setting for maximum results.",
    price: 129,
    duration: "30 days",
    type: "Group Classes",
    image: "https://via.placeholder.com/300x200?text=HIIT+Classes",
  },
  {
    title: "Online Strength Training",
    description: "Virtual strength training program to build muscle and improve fitness.",
    price: 79,
    duration: "20 days",
    type: "Online",
    image: "https://via.placeholder.com/300x200?text=Strength+Training",
  },
];

const MembershipPage = () => {
  const [filterType, setFilterType] = useState('All');
  const [sortBy, setSortBy] = useState('Price');

  const handleAddToCart = (program) => {
    console.log(`${program.title} added to cart`);
  };

  // Filter programs by type
  const filteredPrograms = filterType === 'All'
    ? programsData
    : programsData.filter(program => program.type === filterType);

  // Sort programs
  const sortedPrograms = [...filteredPrograms].sort((a, b) => {
    if (sortBy === 'Price') {
      return a.price - b.price;
    } else if (sortBy === 'Duration') {
      return parseInt(a.duration) - parseInt(b.duration);
    }
    return 0;
  });

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(45deg, #1A237E, #4A148C)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Box sx={{ zIndex: 1 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold', mb: 2 }}>
            Course Details
          </Typography>
          <Button variant="contained" style={{ backgroundColor: '#D32F2F', color: '#fff' }}>
            Become a VIP
          </Button>
        </Box>
      </Box>

      {/* Filters and Sorting */}
      <Box sx={{ py: 4, px: 2, backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center', gap: 2 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Type</InputLabel>
          <Select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            label="Filter by Type"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Group Classes">Group Classes</MenuItem>
            <MenuItem value="Personal Training">Personal Training</MenuItem>
            <MenuItem value="Online">Online</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Sort by</InputLabel>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            label="Sort by"
          >
            <MenuItem value="Price">Price</MenuItem>
            <MenuItem value="Duration">Duration</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Program List */}
      {['Day 1', 'Day 2', 'Day 4'].map((day, index) => (
        <Box key={day} sx={{ py: 4, px: 2, backgroundColor: '#fff' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>{day}</Typography>
          <Grid container spacing={3}>
            {sortedPrograms.slice(index * 2, (index + 1) * 2).map((program) => (
              <Grid item xs={12} sm={6} key={program.title}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={program.image}
                    alt={program.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{program.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {program.description}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Price: ${program.price}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      Duration: {program.duration}
                    </Typography>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: '#D32F2F', color: '#fff' }}
                      onClick={() => handleAddToCart(program)}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default MembershipPage;