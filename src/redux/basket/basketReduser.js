import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: []
} 

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, {payload}) => {
      state.products.push(payload)
      },
    removeFromBasket: (state, {payload}) => {
      state.products = payload
      }
    }
}) 

export const {addToBasket, removeFromBasket} = basketSlice.actions

export const getBasket = (state) => state.basket.products