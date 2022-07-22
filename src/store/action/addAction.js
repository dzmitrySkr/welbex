let ADD_USERS = "ADD_USERS";
let SAVE_USER = "SAVE_USER";
let SORT_BY_NAME = "SORT_BY_NAME";
let SORT_BY_NAME_REV = "SORT_BY_NAME_REV";
let SORT_BY_DATE = "SORT_BY_DATE";
let SORT_BY_DATE_REV = "SORT_BY_DATE_REV";
let CHANGE_NAME = "CHANGE_NAME";

export function addUsers(item) {
  return {
    type: ADD_USERS,
    payload: item,
  };
}

export function saveUser(item) {
  return {
    type: SAVE_USER,
    payload: item,
  };
}

export function userSortByDate() {
  return {
    type: SORT_BY_DATE,
  };
}

export function userSortByDateREV() {
  return {
    type: SORT_BY_DATE_REV,
  };
}

export function userSortByName() {
  return {
    type: SORT_BY_NAME,
  };
}

export function userSortByNameREV() {
  return {
    type: SORT_BY_NAME_REV,
  };
}

export function changeNameR(id, item) {
  console.log(item);
  return {
    type: CHANGE_NAME,
    payload: { id: id, item: item },
  };
}

