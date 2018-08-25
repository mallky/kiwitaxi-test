import * as types from "../types/consts";

export const addData = (data) => ({
  type: types.ADD_DATA,
  data
});

export const setCurrentPage = (pageNum) => ({
  type: types.SET_CURRENT_PAGE,
  pageNum
});

export const catchError = () => ({
  type: types.CATCH_ERROR,
  isError: true
});
