const ADD_MODULE = "ADD_MODULE";
const DELETE_MODULE = "DELETE_MODULE";
const EDIT_MODULE = "EDIT_MODULE";

let initialStore = [
  { name: "HTML", color: "red" },
  { name: "JS", color: "green" },
  { name: "React", color: "yellow" },
  { name: "Redax", color: "blue" },
  { name: "CSS", color: "blueviolet" },
];

function modulsReduser(store = initialStore, action) {
  switch (action.type) {
    case ADD_MODULE:
      return [...store, action.payload];
    case DELETE_MODULE:
      return [...store.filter((item) => item.name !== action.payload.name)];
  }

  return store;
}

export default modulsReduser;
