
import { createSlice } from "@reduxjs/toolkit";
import moviesCollection from '../data/data.json'


const initialState = {
    user:"",
    isLogged:false,
    isModalOpen:false,
    movies:[]
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        allowAccess(state, {payload}){
            state.user = payload;
            state.isLogged = true;
        },
        logout(state){
            state.user = "";
            state.isLogged = false;
        },
        handleModal(state){
            state.isModalOpen = !state.isModalOpen;
        },
        loadMovies(state){
            state.movies = moviesCollection;
        }
    }
})

export const { allowAccess, logout, handleModal, loadMovies } = userSlice.actions
export default userSlice.reducer