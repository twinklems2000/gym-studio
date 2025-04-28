"use client";

import { BookingForm } from "@/components/BookingForm";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";

const Footer = styled("footer")({
  backgroundColor: "#1A237E",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
  marginTop: "auto",
});

const ContactPaper = styled(Paper)({
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#283593",
  color: "#fff",
});

const MapContainer = styled("div")({
  height: "500px",
  width: "100%",
  marginBottom: "20px",
  "@media (max-width: 600px)": {
    height: "200px",
  },
});

const Contact = () => {
  return (
    <div>
      <CssBaseline />
      <Container
        maxWidth="lg"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        {/* <Typography variant="h4" align="center" gutterBottom>
          Contacts
        </Typography> */}

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.123456!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75d!2sLos Angeles, CA, USA!5e0!3m2!1sen!2sus!4v1623456789!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            title="Google Map"
          ></iframe>
        </MapContainer>
        <Grid
          container
          spacing={2}
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        >
          <Grid item xs={12} md={6} sx={{ mt: { md: "-60px" } }}>
            <ContactPaper>
              <Typography variant="h6">Contact Us</Typography>
              <Typography>+1 (482) 999 20 11</Typography>
              <Typography>+1 (482) 123 20 45</Typography>
              <Typography>
                Address: 4821 Hilt Croft Farm Road, Los Angeles, USA
              </Typography>
              <Button
                variant="contained"
                color="success"
                style={{ margin: "10px" }}
                href="https://wa.me/14829992011"
              >
                WhatsApp
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="tel:+14829992011"
              >
                Call
              </Button>
              <Typography variant="h6" style={{ marginTop: "20px" }}>
                Operating Hours
              </Typography>
              <Typography>Monday - Friday: 9:00 AM - 5:00 PM</Typography>
              <Typography>Saturday: 10:00 AM - 2:00 PM</Typography>
              <Typography>Sunday: Closed</Typography>
            </ContactPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
