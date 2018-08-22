import * as types from "./../types/consts";

const initialState = {
  data: [],
  pageNum: 0
};

const dataRed = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_DATA:
      const data = action.data || state.data;

      return {
        ...state,
        data
      };

    case types.SET_CURRENT_PAGE:
      const pageNum = action.pageNum;

      return {
        ...state,
        pageNum
      };

    default:
      return state;
  }
};

export default dataRed;