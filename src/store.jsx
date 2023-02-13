import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./features/cocktail/cocktailSlice";


export const store = configureStore({
    reducer: {
        cocktail: cocktailSlice,
    },

})