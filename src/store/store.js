import { configureStore } from "@reduxjs/toolkit";
import personsSlice from "../slices/firstPageSlice";
import planetsSlice from "../slices/planetsSlice";

export const store = configureStore({
  reducer: {
    persons: personsSlice,
    planets: planetsSlice,
    // personsTwo: personsTwoSlice,
  },
});
