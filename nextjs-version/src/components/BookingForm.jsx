import { toastService } from "@/utills/config";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";

export const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMsg("");
    toastService.success("Form submitted Successfully");
  };

  return (
    <Paper style={{ padding: "20px", textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" flexWrap="wrap">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              type="textarea"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "#D32F2F",
            color: "#fff",
            marginTop: "10px",
          }}
        >
          Send
        </Button>
      </form>
    </Paper>
  );
};
