"use client";

import { fitnessData, trainerData } from "@/utills/constant";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion"; // Import Framer Motion
import { lazy, Suspense } from "react";

const LazyNewsletterForm = lazy(() => import("@/components/NewsletterForm"));

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          position: "relative",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          overflow: "hidden", // Prevent video overflow
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          style={{ zIndex: 1, position: "relative" }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Build A Perfect Health Growth
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#D32F2F",
              color: "#fff",
              fontSize: "1.2rem",
            }}
          >
            Join Now
          </Button>
        </motion.div>
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline // Added to ensure playback on mobile devices
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.5,
            zIndex: 0, // Ensure video is behind content
          }}
        >
          <source src="/assets/banner_video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </Box>
      </motion.div>

      {/* Overview of Fitness Programs */}
      <Box sx={{ py: 6, px: 2, backgroundColor: "#fff" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to our JOSY Health Care Service
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {fitnessData.map((program, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="340"
                    image={program?.img}
                    alt={`${program?.img}_img`}
                  />
                  <CardContent>
                    <Typography variant="h6">{program?.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Featured Trainers Section */}
      <Box
        sx={{
          py: 6,
          px: 2,
          background: "linear-gradient(45deg, #1A237E, #4A148C)",
          color: "#fff",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Meet Our Expert Trainers
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {trainerData.map((trainer, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card sx={{ backgroundColor: "#fff", color: "#000" }}>
                  <CardMedia
                    component="img"
                    height="500"
                    image={trainer?.img}
                    alt={`${trainer?.img}_img`}
                  />
                  <CardContent>
                    <Typography variant="h6">{trainer?.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {trainer?.about}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* About the Studio Section */}
      <Box sx={{ py: 6, px: 2, backgroundColor: "#fff" }}>
        <Typography variant="h4" align="center" gutterBottom>
          About JOSY Fitness Studio
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Typography variant="body1" sx={{ mb: 2 }}>
                JOSY Fitness Studio is dedicated to helping you achieve your
                health goals with personalized programs and expert guidance.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Box
                component="iframe"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Promo Video"
                sx={{ width: "100%", height: "300px", border: 0 }}
                allowFullScreen
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 6, px: 2, backgroundColor: "#D32F2F", color: "#fff" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Success Stories from Our Clients
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {["Client 1", "Client 2"].map((client, index) => (
            <Grid item xs={12} sm={6} key={client}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card sx={{ backgroundColor: "#fff", color: "#000" }}>
                  <CardContent>
                    <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                      "JOSY Fitness transformed my life! I feel stronger and
                      healthier than ever."
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mt: 1 }}>
                      - {client}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Newsletter Sign-up Section */}
      <Suspense fallback={<Typography>Loading Newsletter...</Typography>}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <LazyNewsletterForm />
        </motion.div>
      </Suspense>
    </>
  );
};

export default Home;
