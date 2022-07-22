let ADD_USERS = "ADD_USERS";
let SAVE_USER = "SAVE_USER";
let SORT_BY_NAME = "SORT_BY_NAME";
let SORT_BY_NAME_REV = "SORT_BY_NAME_REV";
let SORT_BY_DATE = "SORT_BY_DATE";
let SORT_BY_DATE_REV = "SORT_BY_DATE_REV";
let CHANGE_NAME = "CHANGE_NAME";

let initialStore = [];

function addReduser(store = initialStore, action) {
  switch (action.type) {
    case ADD_USERS:
      return [...action.payload];
    case SAVE_USER:
      return [...store, action.payload];
    case SORT_BY_NAME:
      return [
        ...store.sort((a, b) =>
          a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1
        ),
      ];

    case SORT_BY_NAME_REV:
      return [
        ...store.sort((a, b) =>
          a.firstName.toLowerCase() < b.firstName.toLowerCase() ? 1 : -1
        ),
      ];
    case SORT_BY_DATE:
      return [
        ...store.sort(
          (a, b) =>
            new Date(a.updatedAt.split("T")[0].split("-").join("-")).getTime() -
            new Date(b.updatedAt.split("T")[0].split("-").join("-")).getTime()
        ),
      ];

    case SORT_BY_DATE_REV:
      return [
        ...store.sort(
          (a, b) =>
            new Date(b.updatedAt.split("T")[0].split("-").join("-")).getTime() -
            new Date(a.updatedAt.split("T")[0].split("-").join("-")).getTime()
        ),
      ];

    case CHANGE_NAME:
      console.log(action.payload.item);
      return [
        ...store.filter((i) => {
          if (i.id === action.payload.id) {
            return (i.firstName = action.payload.item), (i.lastName = " ");
          } else {
            return i;
          }
        }),
      ];
  }

  return store;
}

export default addReduser;
