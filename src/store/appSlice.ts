import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    themeMode: 'dark'
  },
  reducers: {
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    }
  }
});

export const { setThemeMode } = appSlice.actions;

export default appSlice.reducer;
