import { createContext, useContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

export const initialState = {
  isLoading: true,
  query: "css",
  nbPages: 0,
  page: 0,
  hits: [],
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApiData(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  const removePost = (id) => {
    dispatch({ type: "REMOVE_POST", payload: id });
  };

  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };

  const nextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  const prevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        removePost,
        searchPost,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
