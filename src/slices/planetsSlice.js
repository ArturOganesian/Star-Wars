import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  planets: [],
  currentPage: 1,
  isLoading: false,
  error: null,
};

export const getPlanets = createAsyncThunk(
  "planets/getPlanets",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/planets/?page=${page}`,
      );
      return [response.data];
    } catch (error) {
      console.log(error.message, "Planets page not found");
      alert("Page not found");
      return rejectWithValue(error.message);
    }
  },
);

export const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    appendPlanets: (state, action) => {
      state.planets = [...state.persons, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlanets.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getPlanets.fulfilled, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.planets = [...state.planets, ...action.payload];
      })
      .addCase(getPlanets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentPage, appendPlanets } = planetsSlice.actions;
export default planetsSlice.reducer;
