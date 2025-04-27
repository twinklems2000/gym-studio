import { Button, Grid, Paper, TextField } from "@mui/material";


export const  BookingForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <Paper style={{ padding: '20px', textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" flexWrap="wrap">
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Name" variant="outlined" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" variant="outlined" type="email" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Message" variant="outlined" type="email" required />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid> */}
          {/* <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              variant="outlined"
              select
              SelectProps={{ native: true }}
              required
            >
              <option value="">Select Program</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
            </TextField>
          </Grid> */}
          {/* <Grid item xs={12} sm={12}>
            <Button type="submit" variant="contained" style={{ backgroundColor: '#D32F2F', color: '#fff' }}>
              Send
            </Button>
          </Grid> */}
        </Grid>
        <Button type="submit" variant="contained" style={{ backgroundColor: '#D32F2F', color: '#fff', marginTop: '10px' }}>
              Send
            </Button>
      </form>
    </Paper>
  );
}

