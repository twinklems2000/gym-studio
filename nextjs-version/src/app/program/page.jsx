"use client";


import { Box, Typography, Grid, Button, Card, CardMedia, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useParams } from 'next/navigation';

// Sample program/trainer data (in a real app, this would come from an API or database)
const programData = {
  id: '1',
  title: 'Full Body Workout Program',
  description: 'A comprehensive workout program designed to improve strength, endurance, and overall fitness.',
  price: 99,
  duration: '30 days',
  trainer: {
    name: 'Trainer John Doe',
    bio: 'John Doe is a certified fitness coach with over 10 years of experience in strength training and nutrition coaching.',
    image: 'https://via.placeholder.com/300x300?text=Trainer+John',
  },
  schedule: [
    { day: 'Monday', time: '9:00 AM - 10:00 AM', session: 'Full Body Workout' },
    { day: 'Wednesday', time: '6:00 PM - 7:00 PM', session: 'Strength Training' },
    { day: 'Friday', time: '8:00 AM - 9:00 AM', session: 'Cardio Session' },
  ],
  inclusions: [
    'Personalized workout plan',
    'Weekly progress tracking',
    'Access to online resources',
    'Nutrition guide',
  ],
  video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  images: [
    'https://via.placeholder.com/600x400?text=Workout+Image+1',
    'https://via.placeholder.com/600x400?text=Workout+Image+2',
  ],
};

const ProgramDetailPage = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL

  // In a real app, fetch the program data using the ID (e.g., from an API)
  const program = programData; // Placeholder data

  const handleAddToCart = () => {
    console.log(`${program.title} added to cart`);
  };

  const handleJoinNow = () => {
    console.log(`Joined ${program.title}`);
  };

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
            {program.title}
          </Typography>
          <Button variant="contained" style={{ backgroundColor: '#D32F2F', color: '#fff' }} onClick={handleJoinNow}>
            Join Now
          </Button>
        </Box>
      </Box>

      {/* Program Description */}
      <Box sx={{ py: 4, px: 2, backgroundColor: '#fff' }}>
        <Typography variant="h4" gutterBottom>
          Program Overview
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {program.description}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Price: ${program.price} | Duration: {program.duration}
        </Typography>
      </Box>

      {/* Images Section */}
      <Box sx={{ py: 4, px: 2, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom>
          Program Images
        </Typography>
        <Grid container spacing={3}>
          {program.images.map((image, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={image}
                  alt={`Program Image ${index + 1}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Video Section */}
      <Box sx={{ py: 4, px: 2, backgroundColor: '#fff' }}>
        <Typography variant="h4" gutterBottom>
          Program Video
        </Typography>
        <Box
          component="iframe"
          src={program.video}
          title="Program Video"
          sx={{ width: '100%', height: '400px', border: 0 }}
          allowFullScreen
        />
      </Box>

      {/* Trainer Bio Section */}
      <Box sx={{ py: 4, px: 2, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom>
          Meet Your Trainer
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={program.trainer.image}
                alt={program.trainer.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              {program.trainer.name}
            </Typography>
            <Typography variant="body1">
              {program.trainer.bio}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Schedule Section */}
      <Box sx={{ py: 4, px: 2, backgroundColor: '#fff' }}>
        <Typography variant="h4" gutterBottom>
          Schedule
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Day</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Session</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {program.schedule.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.day}</TableCell>
                  <TableCell>{entry.time}</TableCell>
                  <TableCell>{entry.session}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Course/Package Inclusions */}
      <Box sx={{ py: 4, px: 2, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom>
          What’s Included
        </Typography>
        <ul>
          {program.inclusions.map((item, index) => (
            <li key={index}>
              <Typography variant="body1">{item}</Typography>
            </li>
          ))}
        </ul>
      </Box>

      {/* CTAs */}
      <Box sx={{ py: 4, px: 2, backgroundColor: '#fff', textAlign: 'center' }}>
        <Button
          variant="contained"
          style={{ backgroundColor: '#D32F2F', color: '#fff', mr: 2 }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: '#1A237E', color: '#fff' }}
          onClick={handleJoinNow}
        >
          Join Now
        </Button>
      </Box>
    </>
  );
};

export default ProgramDetailPage;