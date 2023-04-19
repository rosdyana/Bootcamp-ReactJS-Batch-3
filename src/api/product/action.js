import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../helpers/service";

export const getProducts = createAsyncThunk("/products", async () => {
  try {
    const response = await httpService.get("/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getProduct = createAsyncThunk("/products", async (id) => {
  try {
    const response = await httpService.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
