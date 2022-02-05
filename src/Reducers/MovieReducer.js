export const movieReducer = (state, action) => {
  switch (action.type) {
    case "SEARCHED": {
      return {
        ...state,
        searchResults: action.payload,
      };
    }
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "ADD_TO_WATCHED":
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };
    case "REMOVE":
      return {
        ...state,
        watched: [...state.watched, action.payload],
      };
    default:
      return state;
  }
};
