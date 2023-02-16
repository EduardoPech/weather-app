import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listWeather: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeather: (state, action) => {
      state.listWeather.push(action.payload);
    },
    removeWeather: (state, action) => {
      state.listWeather = state.listWeather.filter(
        (item) => item.city !== action.payload
      );
    },
    resetWeather: (state) => {
      state.listWeather = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWeather, resetWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
