import { createSlice } from "@reduxjs/toolkit";
import * as productAct from "./action";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        entities: [],
        entity: {
            createdAt: "",
            id: "",
            name: "",
            description: "",
            price: "",
            productImage: "",
        },
        error: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(productAct.getProducts.pending, (state) => {
                console.log("pending");
                state.loading = true;
            })
            .addCase(productAct.getProducts.fulfilled, (state, action) => {
                console.log("fulfilled");
                state.loading = false;
                state.entities = action.payload;
            })
            .addCase(productAct.getProducts.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = action;
            })
            .addCase(productAct.getProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(productAct.getProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.entity = action.payload;
            })
            .addCase(productAct.getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action;
            }),
});

export default productSlice.reducer;