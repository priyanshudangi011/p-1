
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: null,
    token: null,
  },

  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },

    logout: (state) => {
      state.user = null
      state.token = null
    },

    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }
      }
    },
  },
})

export const { setCredentials, logout, updateUser } =
  authSlice.actions

export default authSlice.reducer