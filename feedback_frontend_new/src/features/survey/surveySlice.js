import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // what you render
  display_qaList: [
    {
      id: 0,
      question: "Which gallery was your personal favorite?",
      image: [
        /* male, female, others, preferNotToSay */
      ],
      display_names: [
        "Kinetic Gallery",
        "Tacktile Gallery",
        "Navrasa Galley",
        "Puzzle Gallery",
        "Light Gallery",
        "Digital Gallery",
      ],
    },
    {
      id: 1,
      question: "How did you find out about Parsec Jaynagar?",
      image: null,
      display_names: [
        "Google Search",
        "Word of Mouth",
        "Social Media",
        "School",
        "Other",
      ],
    },
    {
      id: 2,
      question: "Roughly how much time did you spend at the gallery?",
      image: [
        /* knowledge, entertainment, both */
      ],
      display_names: ["0", "2.5", "5"],
    },
    {
      id: 3,
      question: "Choose everything that applies?",
      image: [
        /* react5, react4, react3, react2, react1 */
      ],
      display_names: [
        "I would recommend Parsec to friends",
        "I would recommend Parsec to family",
        "I would recommend Parsec to a school",
        "I saw science from a new perspective",
        "I had a fun and engaging time",
      ],
    },
    {
      id: 4,
      question: "What’s next? 👀",
      image: [
        /* quality, value_for_money, interaction, explaination, perfect */
      ],
      display_names: [
        "Visiting the Makerspace and building something",
        "Making a donation",
        "Volunteering at Parsec",
        "Following Param on Social Media",
        "Signing up for a Param Workshop",
      ],
    },
    {
      id: 5,
      question: "Let’s stay in touch?",
      image: [
        /* quality, value_for_money, interaction, explaination, perfect */
      ],
      display_names: ["Phone Number", "Email"],
    },
    {
      id: 6,
      question: "Any other feedback?",
      image: [
        /* quality, value_for_money, interaction, explaination, perfect */
      ],
      display_names: ["Your answer"],
    },
    // If you want more questions, add here
  ],

  // answers aligned with display_qaList (string for text or label chosen)
  qaList: [
    { question: "Which gallery was your personal favorite?", answer: "" },
    { question: "How did you find out about Parsec Jaynagar?", answer: "0" },
    {
      question: "Roughly how much time did you spend at the gallery?",
      answer: "",
    },
    { question: "Choose everything that applies?", answer: "" },
    { question: "What’s next? 👀", answer: "" },
    { question: "Let’s stay in touch?", answer: "" },
    { question: "Any other feedback?", answer: "" },
  ],

  currentIndex: 0,
  selectedDiv: -1,
  isRequired: false, // you can keep this if you use it elsewhere
  validationMessage: "",
  submitStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  submitError: null,
};

const surveySlice = createSlice({
  name: "Survey",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.qaList[questionIndex].answer = answer;
    },
    setSelectedDiv: (state, action) => {
      state.selectedDiv = action.payload;
    },

    setValidationMessage: (state, action) => {
      state.validationMessage = action.payload;
    },
    next: (state) => {
      if (state.currentIndex < state.display_qaList.length - 1) {
        state.currentIndex += 1;
        state.selectedDiv = -1;
        state.validationMessage = "";
      }
    },
    back: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        state.selectedDiv = -1;
        state.validationMessage = "";
      }
    },

    resetSurvey: (state) => {
      state.qaList = state.qaList.map((q) => ({ ...q, answer: "" }));
      state.currentIndex = 0;
      state.selectedDiv = -1;
      state.validationMessage = "";
      state.submitStatus = "idle";
      state.submitError = null;
    },
  },
});


export const {
  setAnswer,
  setSelectedDiv,
  setValidationMessage,
  next,
  back,
  resetSurvey,
} = surveySlice.actions;

export default surveySlice.reducer;