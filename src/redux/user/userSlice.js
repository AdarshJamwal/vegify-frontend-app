import {createSlice} from '@reduxjs/toolkit'; 


const initialState ={
    currentUser: null,
    loading:false,
    error:false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state)=>{
            state.loading = true;
        },
        signInSuccess: (state, action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailure: (state, action)=>{
            state.loading = false;
            state.error = action.payload
        },
        updateUserStart:(state)=>{
            state.loading = true
        },
        updateUserSuccess:(state, action)=>{
            state.currentUser = action.payload; 
            state.loading = false;
            state.error = false;
        },
        updateUserFailure:(state, action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserStart:(state)=>{
            state.loadidelete
        },
        deleteUserSuccess:(state)=>{
            state.currentUser = null; 
            state.loading = false;
            state.error = false;
        },
        deleteUserFailure:(state, action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        signOut: (state)=>{
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },



    }
});

export const {
    signInStart,
    signInSuccess,
    signInFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    deleteUserFailure,
    deleteUserSuccess,
    deleteUserStart,
    signOut,
} = userSlice.actions;
export default userSlice.reducer; 





// The createSlice function simplifies Redux state management by bundling action creators 
// and reducer logic together for a specific slice of state. It improves code readability and
// maintainability by reducing boilerplate and allowing you to write more intuitive reducer logic.


// reducer are the special type of the functions that  helps us to change the state of our user like loading error
// and current user 
