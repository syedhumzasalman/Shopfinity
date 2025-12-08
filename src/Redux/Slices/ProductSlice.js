import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState: {
        addtocard: [],
    },
    reducers: {

        addtoCard: (state, { payload }) => {

            const findProduct = state.addtocard.find((prod) => {
                if (prod.id == payload.id) {
                    return true;
                }
            });

            // console.log(state.addtocard);

            if (!findProduct) {
                state.addtocard.push({ ...payload, quantity: 1 });
            }
        },

        removeAddtocard: (state, { payload }) => {

            // console.log("removeAddtocard", payload);

            // console.log(JSON.parse(JSON.stringify(state.addtocard)));

            state.addtocard = state.addtocard.filter((item) => item.id !== payload)

        },

        increaseQty: (state, { payload }) => {
            const item = state.addtocard.find(p => p.id === payload);
            if (item) item.quantity++;
        },

        decreaseQty: (state, { payload }) => {
            const item = state.addtocard.find(p => p.id === payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        }

    }
})

const { reducer, actions } = productSlice

export const productReducer = reducer
export const { addtoCard, removeAddtocard, increaseQty, decreaseQty } = actions
