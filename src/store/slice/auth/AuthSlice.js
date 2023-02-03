import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiousConfig from '../../../services/AxiosConfig';

// initial state
const initialState = {
    loading: false,
    isAuthenticate: userStatus(),
    message: '',
    errorMessage: '',
}

// get user status from session storage
function userStatus() {
    try {
        const serialized = sessionStorage.getItem('usertoken');
        if (serialized === null) {
        return false;
        }
        return true;
    }
    catch (err) {
        return false;
    }
}

// login attemped
export const LoginAction = createAsyncThunk('auth/login', async (data) =>{
    const res = await axiousConfig.post('/login',data)
    return res.data
})

const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [LoginAction.pending] : (state) =>{
            state.loading = true
            state.errorMessage = '';
        },
        [LoginAction.fulfilled] : (state,action) =>{
            state.loading = false;
            const token = action.payload.token;
            if(token){
                sessionStorage.setItem('usertoken',JSON.stringify(token));
                state.isAuthenticate = true;
            }else{
                state.isAuthenticate = false;
                state.errorMessage = action.payload
            }
        },
        [LoginAction.rejected] : (state) =>{
            state.loading = false;
            state.isAuthenticate = false;
        }
    }
})

const { reducer } = AuthSlice;
// export const { LOGIN, LOGOUT } = AuthSlice.actions;
export default reducer;