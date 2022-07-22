const ADD_MODULE = "ADD_MODULE";
const DELETE_MODULE = "DELETE_MODULE";
const EDIT_MODULE = "EDIT_MODULE";

export const addModule = (item) => {
  return {
    type: ADD_MODULE,
    payload: item,
  };
};

export const deleteModule = (item) => {
  return {
    type: DELETE_MODULE,
    payload: item,
  };
};
