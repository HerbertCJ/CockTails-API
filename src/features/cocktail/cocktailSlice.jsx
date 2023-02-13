import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cocktailsList: [],
    loading: false,
    search: '',
}


export const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: {
        setLoading: (state, {payload}) => {
            state.loading = payload
        }

    },
})

export const {setLoading} = cocktailSlice.actions

export default cocktailSlice.reducer