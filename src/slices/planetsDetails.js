import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  homeworlds: [],
  isLoading: false,
};

export const getWorlds = createAsyncThunk(
  "worlds/getWorlds",
  async (planet, { rejectWithValue }) => {
    try {
      const response = await axios.get(planet);
      return [response.data];
    } catch (err) {
      console.log(err.message);
      return rejectWithValue(err.message);
    }
  },
);

export const worldsSlice = createSlice({
  name: "worlds",
  initialState,
  reducers: {
    setWorld: (state, action) => {
      state.homeworlds = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getWorlds.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getWorlds.fulfilled, (state, action) => {
        state.isLoading = true;
        state.homeworlds = action.payload;
      })
      .addCase(getWorlds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setWorld } = worldsSlice.actions;
export default worldsSlice.reducer;
