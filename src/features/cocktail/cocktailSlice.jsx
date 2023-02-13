import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cocktailsList: [],
    loading: false,
    searchTerm: '',
}


export const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: { 
        updateList: (state, {payload}) => {
            state.cocktailsList = payload
        },
        setLoading: (state, {payload}) => {
            state.loading = payload
        },
        updateSearch: (state, {payload}) => {
            state.searchTerm = payload
        },
    },
})

export const {setLoading, updateList, updateSearch} = cocktailSlice.actions

export default cocktailSlice.reducer