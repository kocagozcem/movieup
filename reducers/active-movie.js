export default (state = {}, action) => {
  switch (action.type) {
    case "SET_ACTIVEMOVIE":
      return { ...state, value: action.value };
    default:
      return state;
  }
};
