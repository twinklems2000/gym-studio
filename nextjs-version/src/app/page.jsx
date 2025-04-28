"use client";

import { toastService } from "@/utills/config";
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
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { lazy, Suspense } from "react";

const LazyNewsletterForm = lazy(() => import("@/components/NewsletterForm"));

// Animation Variants for the new section

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  const router = useRouter();

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
          overflow: "hidden",
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
            onClick={() =>
              toastService.success("Congratulations on joining 🎉 ")
            }
          >
            Join Now
          </Button>
        </motion.div>
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "600px",
            objectFit: "cover",
            opacity: 0.5,
            zIndex: 0,
          }}
        >
          <source src="/assets/banner_video_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
      </motion.div>

      {/* Welcome to Josy Health Service Section */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
          backgroundColor: "#fff",
        }}
      >
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "block" },
              textAlign: "center",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src="/assets/fitness_text.png"
                sx={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "50%" } }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{
                  color: "#1A237E",
                  fontWeight: "bold",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  mb: 2,
                }}
              >
                Welcome to our Josy health service
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  mb: 3,
                }}
              >
                Integer ac arcu id elit dictum aliquam. Nunc id ante id elit
                finibus accumsan sit amet id lorem. Vestibulum ac elementum
                arcu, eu vestibulum lorem. Nam semper facilisis placerat. Ut
                ornare leo nec ipsum efficitur varius. Vestibulum eu odio ut
                nulla.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Why Choose JOSY Section */}
      <Box
        sx={{
          py: { xs: 4, md: 12 },
          px: { xs: 2, md: 4 },
          background: "linear-gradient(45deg, #2C3E50, #8B0000)", // Gradient matching the image
          color: "#fff",
          position: "relative",
          mb: "100px",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
            position: "relative",
            justifyContent: "space-between",
          }}
        >
          {/* Text and Button */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Why you choose JOSY to be fit & healthy
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  opacity: 0.9,
                  width: { xs: "100%", sm: "60%", md: "50%" },
                }}
              >
                Mauris sit amet velit placerat, dictum quam id, mollis elit.
                Nunc nec lorem eu ex hendrerit facilisis. Nullam sit amet tortor
                ex. Vivamus ut leo eu ex.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#D32F2F",
                  color: "#fff",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  padding: { xs: "8px 16px", md: "10px 20px" },
                }}
                onClick={() => router.push("/program")}
              >
                About Me
              </Button>
            </motion.div>
          </Grid>

          {/* Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              mt: { xs: 3, md: 0 },
              position: { xs: "none", sm: "absolute", md: "absolute" },
              right: "0px",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInRight}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src="/assets/strength_training.jpg"
                alt="Why Choose JOSY"
                sx={{
                  width: { xs: "100%", sm: "200px", md: "500px" },
                  maxWidth: { xs: "100%", sm: "80%", md: "70%" },
                  height: "250px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  mt: { xs: "0px", sm: "0px", md: "110px" },
                }}
              />
            </motion.div>
          </Grid>
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
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "50%" } }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Typography variant="body1" sx={{ mb: 2 }}>
                At JOSY Fitness Studio, we are passionate about transforming
                lives through fitness and wellness. Located at the heart of the
                community, our state-of-the-art facility is designed to inspire
                and empower individuals of all fitness levels to achieve their
                health goals. Whether you're a beginner looking to kickstart
                your journey or an experienced athlete aiming to elevate your
                performance, we offer a welcoming environment tailored to your
                needs.
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
                src="https://www.youtube.com/embed/37UhELFvPec?si=FgJWogCP6i75SfDn"
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

      {/* Overview of Fitness Programs */}
      <Box sx={{ py: 6, px: 2, backgroundColor: "#fff" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Something Know About Health Tips & Tricks
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {fitnessData.map((program, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} width={300}>
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
                      {program?.info}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
