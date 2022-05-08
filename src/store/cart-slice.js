import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0
    },

    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            state.items.push({
                id: newItem.id,
                image: newItem.image,
                name: newItem.name,
                price: newItem.price,
                brand: newItem.brand,
            });

            cartSlice.caseReducers.calculatePrice(state);
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            cartSlice.caseReducers.calculatePrice(state);
        },

        calculatePrice(state) {
            let calculatedTotalPrice = 0

            for (const item of state.items) {
                calculatedTotalPrice += item.price;
            }

            state.totalPrice = calculatedTotalPrice;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;