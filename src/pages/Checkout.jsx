import {
  Container,
  Grid,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    { title: "Shoes", quantity: 1, price: 50 },
    { title: "Jacket", quantity: 2, price: 100 },
  ]);
  const [shippingAddress, setShippingAddress] = useState("");

  const handleIncrement = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity++;
    setCartItems(updatedItems);
  };

  const handleDecrement = (index) => {
    const updatedItems = [...cartItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity--;
      setCartItems(updatedItems);
    }
  };

  const handleRemove = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    const orderData = {
      userId: "loggedInUserId",
      items: cartItems,
      totalPrice: getTotalPrice(),
      status: "processing",
      shippingAddress,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    console.log("Order data:", orderData);
    alert("Order placed successfully!");
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Checkout
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleIncrement(index)}>
                        <AddIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDecrement(index)}>
                        <RemoveIcon />
                      </IconButton>
                      <IconButton onClick={() => handleRemove(index)}>
                        <CancelIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h6" align="right">
              Total Price: ${getTotalPrice()}
            </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
          
            <TextField
              label="Shipping Address"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "20px",
              }}
            >
              <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
                Place Order
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
