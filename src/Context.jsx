import { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";
import { useEffect } from "react";
let api = "https://hn.algolia.com/api/v1/search?";

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
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type:"getStories",
        payload:{
            hits:data.hits,
            nbPages:data.nbPages,
            


        }
      })
      //   isLoading=false
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchApiData(`${api}query=${state.query}&page=${state.page}`);
  }, []);

  return (
    <>
      <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    </>
  );
};
//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
