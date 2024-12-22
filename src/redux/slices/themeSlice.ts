import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  mode: 'light' | 'dark';
  primaryColor: string;
}

const initialState: ThemeState = {
  mode: 'light',
  primaryColor: '#3b82f6',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
  },
});

export const { setThemeMode, setPrimaryColor } = themeSlice.actions;
export default themeSlice.reducer;

