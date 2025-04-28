"use client";

import {
  gymPrograms,
  programIncludes,
  scheduleData,
  trainerData,
} from "@/utills/constant";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ProgramDetailPage = () => {
  // Refs for scroll detection
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const programsRef = useRef(null);
  const videoRef = useRef(null);
  const trainersRef = useRef(null);
  const scheduleRef = useRef(null);
  const includesRef = useRef(null);
  const ctaRef = useRef(null);

  // useInView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const overviewInView = useInView(overviewRef, {
    once: true,
    margin: "-100px",
  });
  const programsInView = useInView(programsRef, {
    once: true,
    margin: "-100px",
  });
  const videoInView = useInView(videoRef, { once: true, margin: "-100px" });
  const trainersInView = useInView(trainersRef, {
    once: true,
    margin: "-100px",
  });
  const scheduleInView = useInView(scheduleRef, {
    once: true,
    margin: "-100px",
  });
  const includesInView = useInView(includesRef, {
    once: true,
    margin: "-100px",
  });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const handleAddToCart = () => {
    console.log("Fitness Health added to cart");
  };

  const handleJoinNow = () => {
    console.log("Joined Fitness Health");
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Box
          sx={{
            position: "relative",
            height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(45deg, #1A237E, #4A148C)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Box sx={{ zIndex: 1 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Fitness Health
            </Typography>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                heroInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#D32F2F", color: "#fff" }}
                onClick={handleJoinNow}
              >
                Join Now
              </Button>
            </motion.div>
          </Box>
        </Box>
      </motion.div>

      {/* Program Description */}
      <motion.div
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Box sx={{ py: 4, px: 2 }}>
          <Typography variant="h4" gutterBottom>
            Program Overview
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Experience tranquility and strength with our Yoga Flow program.
            Perfect for all levels, this class combines mindful breathing, fluid
            movements, and deep stretches to enhance flexibility, balance, and
            mental clarity.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Price: $75 | Duration: 1 month
          </Typography>
        </Box>
      </motion.div>

      {/* Images Section */}
      <motion.div
        ref={programsRef}
        initial="hidden"
        animate={programsInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Box sx={{ py: 4, px: 2, backgroundColor: "#f5f5f5" }}>
          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            color="#000000"
          >
            Our Programs
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {gymPrograms.map((program, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} width={300}>
                <motion.div
                  initial="hidden"
                  animate={programsInView ? "visible" : "hidden"}
                  variants={scaleIn}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
                      image={program.image}
                      alt={`Program Image ${index + 1}`}
                    />
                    <CardContent>
                      <Typography variant="h6">{program?.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {program?.info}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Video Section */}
      <motion.div
        ref={videoRef}
        initial="hidden"
        animate={videoInView ? "visible" : "hidden"}
        variants={slideInRight}
      >
        <Box sx={{ py: 4, px: 2, backgroundColor: "#fff" }}>
          <Typography variant="h4" gutterBottom>
            Program Video
          </Typography>
          <Box
            component="iframe"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Program Video"
            sx={{ width: "100%", height: "400px", border: 0 }}
            allowFullScreen
          />
        </Box>
      </motion.div>

      {/* Trainer Bio Section */}
      <motion.div
        ref={trainersRef}
        initial="hidden"
        animate={trainersInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Box sx={{ py: 4, px: 2, backgroundColor: "#f5f5f5" }}>
          <Typography variant="h4" gutterBottom>
            Meet Your Trainer
          </Typography>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
            my={2}
          >
            {trainerData?.map((trainer, index) => (
              <Grid item xs={12} md={4} key={index} width={250}>
                <motion.div
                  initial="hidden"
                  animate={trainersInView ? "visible" : "hidden"}
                  variants={scaleIn}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      height="450"
                      image={trainer.img2}
                      alt={trainer.name}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {trainer.name}
                      </Typography>
                      <Typography variant="body1">{trainer.about}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Schedule Section */}
      <motion.div
        ref={scheduleRef}
        initial="hidden"
        animate={scheduleInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Box sx={{ py: 4, px: 2, backgroundColor: "#fff" }}>
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
                {scheduleData.map((entry, index) => (
                  <motion.tr
                    key={index}
                    initial="hidden"
                    animate={scheduleInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.2 }}
                  >
                    <TableCell>{entry.day}</TableCell>
                    <TableCell>{entry.time}</TableCell>
                    <TableCell>{entry.session}</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </motion.div>

      {/* Course/Package Inclusions */}
      <motion.div
        ref={includesRef}
        initial="hidden"
        animate={includesInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Box sx={{ py: 4, px: 2, backgroundColor: "#f5f5f5", mx: 2 }}>
          <Typography variant="h4" gutterBottom>
            What’s Included
          </Typography>
          <ul>
            {programIncludes.map((item, index) => (
              <motion.li
                key={index}
                initial="hidden"
                animate={includesInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <Typography variant="body1">{item}</Typography>
              </motion.li>
            ))}
          </ul>
        </Box>
      </motion.div>

      {/* CTAs */}
      <motion.div
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={scaleIn}
      >
        <Box
          sx={{ py: 4, px: 2, backgroundColor: "#fff", textAlign: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="contained"
              style={{ backgroundColor: "#D32F2F", color: "#fff", mr: 2 }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="contained"
              style={{ backgroundColor: "#1A237E", color: "#fff" }}
              onClick={handleJoinNow}
            >
              Join Now
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </>
  );
};

export default ProgramDetailPage;
