import axios from "axios";
import { endLoading, error, loading } from "./loadingReducer";

export const choseLang = (data) => {
  return {
    type: "choiceLang",
    data,
  };
};

export const setValueGo = (data) => {
  return {
    type: "setValueGo",
    data,
  };
};
export const setValuePython = (data) => {
  return {
    type: "setValuePython",
    data,
  };
};

export const setRunCode = (data) => {
  return {
    type: "setRunCode",
    data,
  };
};

const initialState = {
  chosenLang: "go",
  valueGo: "",
  valuePython: "",
  runCode: "",
};

const codemirrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "choiceLang":
      return {
        ...state,
        chosenLang: action.data,
      };
    case "setValueGo":
      return {
        ...state,
        valueGo: action.data,
      };
    case "setValuePython":
      return {
        ...state,
        valuePython: action.data,
      };
    case "setRunCode":
      return {
        ...state,
        runCode: action.data,
      };
    default:
      return state;
  }
};

export const runCodeTC = (language, data) => {
  return async (dispatch) => {
    await dispatch(loading());
    try {
      let response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        { language: language, data: data },
        {
          timeout: 3000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201 && response.data) {
        dispatch(setRunCode(response.data));
        dispatch(endLoading());
        // успешный запрос
        return true;
      } else {
        dispatch(error(response.data));
      }
    } catch ({ response }) {
      dispatch(error(response?.data || "Нет ответа от сервера"));
    }
    dispatch(endLoading());
    return false;
  };
};

export default codemirrorReducer;
