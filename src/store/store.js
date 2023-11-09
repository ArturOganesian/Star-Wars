import { configureStore } from "@reduxjs/toolkit";
import personsSlice from "../slices/firstPageSlice";
import planetsSlice from "../slices/planetsSlice";
import worldsSlice from "../slices/planetsDetails";
export const store = configureStore({
  reducer: {
    persons: personsSlice,
    planets: planetsSlice,
    worlds: worldsSlice,
  },
});
