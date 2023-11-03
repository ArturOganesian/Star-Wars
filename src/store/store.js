import { configureStore } from "@reduxjs/toolkit";
import personsSlice from "../slices/firstPageSlice";
// import  personsTwoSlice  from "../slices/secondPageSlice";

export const store = configureStore({
  reducer: {
    persons: personsSlice,
    // personsTwo: personsTwoSlice,
  },
});
