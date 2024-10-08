// Reducer.js
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curElem) => curElem.objectID !== action.payload
        ),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
        page: 0, // Reset to first page on new search
      };
    case "NEXT_PAGE":
      let nextPage = state.page + 1;
      if (nextPage >= state.nbPages) {
        nextPage = 0;
      }
      return {
        ...state,
        page: nextPage,
      };
    case "PREV_PAGE":
      let prevPage = state.page - 1;
      if (prevPage < 0) {
        prevPage = state.nbPages - 1;
      }
      return {
        ...state,
        page: prevPage,
      };
    default:
      return state;
  }
};

export default reducer;
