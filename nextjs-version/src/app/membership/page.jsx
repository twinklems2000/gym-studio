"use client";

import { useState, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { membershipData } from "@/utills/constant";
import { toastService } from "@/utills/config";
import { addToCart, clearCart, removeFromCart } from "@/redux/features/cart/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";

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

const MembershipPage = () => {
  const [filterType, setFilterType] = useState("All");
  const [openCart, setOpenCart] = useState(false); // State for dialog
  const dispatch = useDispatch();
  const { programList } = useSelector((state) => state.cart);

  // Refs for scroll detection
  const heroRef = useRef(null);
  const filtersRef = useRef(null);
  const programsRef = useRef(null);

  // useInView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const filtersInView = useInView(filtersRef, { once: true, margin: "-100px" });
  const programsInView = useInView(programsRef, {
    once: true,
    margin: "-100px",
  });

  const handleAddToCart = (program) => {
    dispatch(addToCart(program));
    toastService.success(`${program.title} added to cart`);
  };

  const handleRemoveFromCart = (program) => {
    dispatch(removeFromCart(program));
    toastService.success(`${program.title} removed from cart`);
  };

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  const handleSubmitCart = () => {
    toastService.success("Cart submitted successfully!");
    dispatch(clearCart());
    handleCloseCart();
  };

  // Filter programs by type
  const filteredPrograms =
    filterType === "All"
      ? membershipData
      : membershipData.filter((program) => program.type === filterType);

  return (
    <>
      {/* Cart Dialog */}
      <Dialog open={openCart} onClose={handleCloseCart} maxWidth="sm" fullWidth>
        <DialogTitle>Your Cart</DialogTitle>
        <DialogContent>
          {programList.length === 0 ? (
            <Typography>Your cart is empty.</Typography>
          ) : (
            <List>
              {programList.map((item, index) => (
                <ListItem
                  key={item.title}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      color="error"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={`${item.title} (x${item.quantity})`}
                    secondary={`Price: $${item.price} | Duration: ${item.duration}`}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCart}>Cancel</Button>
          <Button
            onClick={handleSubmitCart}
            variant="contained"
            color="primary"
            disabled={programList.length === 0}
            sx={{backgroundColor: "#D32F2F", color: "#fff" }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

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
              Membership Details
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
                startIcon={<ShoppingCartIcon />}
                onClick={handleOpenCart}
                sx={{ backgroundColor: "#D32F2F", color: "#fff" }}
              >
                Cart ({programList.length})
              </Button>
            </motion.div>
          </Box>
        </Box>
      </motion.div>

      {/* Filters and Sorting */}
      <motion.div
        ref={filtersRef}
        initial="hidden"
        animate={filtersInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Box
          sx={{
            py: 4,
            px: 2,
            backgroundColor: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              filtersInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ delay: 0.2, duration: 0.5 }}
          >
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
          </motion.div>
        </Box>
      </motion.div>

      {/* Program List */}
      <motion.div
        ref={programsRef}
        initial="hidden"
        animate={programsInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Grid container spacing={4} justifyContent="center" my={4}>
          {filteredPrograms.map((program, index) => (
            <Grid item xs={12} sm={6} md={6} key={program.title}>
              <motion.div
                initial="hidden"
                animate={programsInView ? "visible" : "hidden"}
                variants={scaleIn}
                transition={{ delay: index * 0.2 }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={program.image}
                    alt={program.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{program.title}</Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {program.description}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Price: ${program.price}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      Duration: {program.duration}
                    </Typography>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        programsInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: index * 0.2 + 0.2 }}
                    >
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#D32F2F", color: "#fff" }}
                        onClick={() => handleAddToCart(program)}
                      >
                        Add to Cart
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </>
  );
};

export default MembershipPage;
