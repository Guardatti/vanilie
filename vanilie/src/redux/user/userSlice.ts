import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/interfaceFormDataLogin_Register/interfaceFormData";




interface UserState {
    currentUser: IUser | null;
}

const initialState: UserState = {
    currentUser: null
}

const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<IUser | null>) => {
            return {
                ...state,
                currentUser: action.payload
            };
        }
    }

})

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer