import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Grid, Hidden, Button, Popover, List, ListItem, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems, setCartItems] = useState([
    // Example cart items
    { title: 'Shoes', quantity: 1, price: "2000", description: "This is my Cart" },
    { title: 'Jacket', quantity: 2, price: "2000", description: "This is my Cart" },
  ]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={8} sm={6}>

            <Typography variant="h6" component="div">
              <Link to="/">
                Rafay's Store
              </Link>
            </Typography>

          </Grid>
          <Hidden smUp>
            <Grid item xs={4} container justifyContent="flex-end">
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <IconButton onClick={handleCartClick}>
                <ShoppingCartIcon style={{ color: 'white' }} />
              </IconButton>
            </Grid>
          </Hidden>
          <Hidden xsDown>
            <Grid item sm={6} container justifyContent="flex-end">
              <Link to="categorypreview">
                <Button color="inherit">
                  Shop
                </Button>
              </Link>
              <Link to="/login">
                <Button color="inherit">
                  Login
                </Button>
              </Link>
              <IconButton onClick={handleCartClick}>
                <ShoppingCartIcon style={{ color: 'white' }} />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleCartClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <List>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${item.title} - Quantity: ${item.quantity} - Price: $${item.price}`} />
                </ListItem>

              ))
            ) : (
              <ListItem>
                <ListItemText primary="Your cart is empty" />
              </ListItem>
            )}
          </List>
          {cartItems.length > 0 && (
            <Link to="/checkout">
              <Button color="primary" fullWidth onClick={() => alert('Proceed to checkout')}>
                Checkout
              </Button>
            </Link>
          )}
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
