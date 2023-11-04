import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  persons: [],
  currentPage: 1,
  isLoading: false,
  error: null,
};

export const getPersons = createAsyncThunk(
  "persons/getPersons",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?page=${page}`,
      );

      return [response.data];
    } catch (err) {
      console.log(err.message, "Oops");
      return rejectWithValue(err.message);
    }
  },
);

export const personsSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    appendPersons: (state, action) => {
      state.persons = [...state.persons, ...action.payload];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPersons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPersons.fulfilled, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.persons = [...state.persons, ...action.payload];
      })
      .addCase(getPersons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentPage, appendPersons } = personsSlice.actions;

export default personsSlice.reducer;
