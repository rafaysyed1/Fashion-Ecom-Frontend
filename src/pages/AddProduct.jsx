import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Box,
  Grid,
  Container,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAsync } from "../store/product/productReducer"; // Update the path

const AddProduct = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    color: "",
    size: "",
    images: [],
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImagesChange = (e) => {
    setProduct({
      ...product,
      images: [...e.target.files],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData object to handle the image files
    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      if (key === "images") {
        product[key].forEach((image, index) => {
          formData.append(`images[${index}]`, image);
        });
      } else {
        formData.append(key, product[key]);
      }
    });

    // Dispatch the addProductAsync action with the product data
    console.log("FormData",formData)
    dispatch(addProductAsync(formData));
    alert("Product Added");

    // Reset the form state
    setProduct({
      name: "",
      category: "",
      description: "",
      price: "",
      color: "",
      size: "",
      images: [],
      stock: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: "10px" }}>
          Add Product
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Product Name"
              value={product.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select name="category" value={product.category} onChange={handleChange}>
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="shoes">Shoes</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Product Description"
              value={product.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="price"
              label="Price"
              type="number"
              value={product.price}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField name="color" label="Color" value={product.color} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField name="size" label="Size" value={product.size} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="stock"
              label="Stock"
              type="number"
              value={product.stock}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <input type="file" accept="image/*" onChange={handleImageChange} style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" color="primary" type="submit">
                Add Product
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddProduct;
