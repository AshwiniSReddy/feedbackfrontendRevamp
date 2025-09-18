import { configureStore } from '@reduxjs/toolkit';
import surveyReducer from '../features/survey/surveySlice' 

export const store = configureStore({
  reducer: {
    survey: surveyReducer, // key name in global state = "survey"
  },
})