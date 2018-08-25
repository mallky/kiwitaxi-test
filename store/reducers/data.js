import * as types from "./../types/consts";

const initialState = {
  data: [],
  pageNum: 0,
  isError: false,
  firstTime: true
};

const dataRed = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_DATA:
      const data = action.data;

      return {
        ...state,
        data,
        pageNum: 0,
        isError: false,
        firstTime: false
      };

    case types.SET_CURRENT_PAGE:
      const pageNum = action.pageNum;

      return {
        ...state,
        pageNum
      };

    case types.CATCH_ERROR:
      return {
        ...state,
        isError: action.isError
      };

    default:
      return state;
  }
};

export default dataRed;