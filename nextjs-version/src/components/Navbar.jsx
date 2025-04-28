"use client";

import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname(); 
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigation = (route) => {
    router.push(route);
    setDrawerOpen(false); 
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Home', route: '/' },
    { label: 'Program', route: '/program' },
    { label: 'Membership', route: '/membership' },
    { label: 'Contacts', route: '/contact' },
  ];

  // Function to determine if a route is active
  const isActive = (route) => pathname === route;

  return (
    <>
      <AppBar
        position="fixed" 
        sx={{
          background: 'linear-gradient(45deg, #1A237E, #4A148C)',
          borderBottom: `1px solid #ffffff`,
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 1, md: 2 }, 
            minHeight: { xs: 48, md: 0 }, 
          }}
        >
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' }, // Smaller font on mobile
              }}
            >
              JOSY
            </Typography>
          </Box>

          {/* Mobile Hamburger Menu (visible on xs, hidden on md and up) */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Menu (hidden on xs, visible on md and up) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                color="inherit"
                onClick={() => handleNavigation(item.route)}
                sx={{
                  fontSize: { md: '0.9rem', lg: '1rem' },
                  px: 2,
                  color: isActive(item.route) ? '#D32F2F' : '#ffffff',
                  cursor: 'pointer',
                  borderBottom: `5px solid ${isActive(item.route) ? '#D32F2F' : 'transparent'}`,
                  py: "20px",
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'linear-gradient(45deg, #1A237E, #4A148C)',
            color: '#fff',
            width: '200px',
          },
        }}
      >
        <Box
          sx={{ p: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button="true"
                key={item.label}
                onClick={() => handleNavigation(item.route)}
                sx={{
                  backgroundColor: isActive(item.route) ? '#D32F2F' : 'transparent', // Highlight active route in drawer
                  '&:hover': {
                    backgroundColor: isActive(item.route) ? '#B71C1C' : 'rgba(255, 255, 255, 0.1)',
                  },
                  borderRadius: 1,
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

module.exports = Navbar;