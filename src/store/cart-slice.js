import { createSlice, current } from "@reduxjs/toolkit";

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

            let calculatedTotalPrice = 0

            for (const item of state.items) {
                calculatedTotalPrice += item.price;
            }

            state.totalPrice = calculatedTotalPrice;

            console.log(current(state.items));
            console.log(state.totalPrice);
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;