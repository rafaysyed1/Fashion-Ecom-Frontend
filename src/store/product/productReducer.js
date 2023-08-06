import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/product/getProducts`);
      return response.data.products;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addProductAsync = createAsyncThunk(
  'products/addProductAsync',
  async (product, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/product/createProduct`, product);
      return response.data.product;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: { products: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.error('fetchProducts failed with message: ', action.payload);
      })
      .addCase(addProductAsync.rejected, (state, action) => {
        console.error('addProductAsync failed with message: ', action.payload);
      });
  }
});

export const productReducer = productsSlice.reducer;
