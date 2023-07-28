import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

// schema
import type { IUser, IUserState } from "./schema"

const initialState: IUserState = {
  name: '',
  lastName: '',
  email: '',
  id: '',
  loading: false,
  loaded: false,
  error: '',
}

/* The `createSlice` function is a utility function provided by Redux Toolkit that helps simplify the
process of creating Redux slices. A Redux slice is a collection of Redux-related code that includes
the reducer function and the actions associated with that reducer. */
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser: (state: IUserState, _action: PayloadAction<{id: number}>) => ({
      ...state,
      loading: true,
    }),
    setUser: (state: IUserState, action: PayloadAction<IUser>) => ({
      ...state,
      ...action.payload,
      loading: false,
      loaded: true,
    }),
    fetchUserFailure: (state: IUserState, action: PayloadAction<string>) => ({
      ...state,
      loading: false,
      loaded: false,
      error: action.payload,
    }),
  },
})

export const {
  fetchUser,
  setUser,
  fetchUserFailure
} = slice.actions

export default slice.reducer
