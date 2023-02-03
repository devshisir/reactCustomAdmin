import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from './slice/auth/AuthSlice';


const reducer = {
    auth: AuthSlice,
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;