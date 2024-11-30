import { useReducer, useEffect } from "react";
import axios from "axios";

const NAVER_ID = import.meta.env.VITE_NAVER_ID;
const NAVER_SECRET = import.meta.env.VITE_NAVER_SECRET;

console.log("NAVER_ID:", NAVER_ID);
console.log("NAVER_SECRET:", NAVER_SECRET);

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}

function useNaver(search) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });

      const {
        data: { items },
      } = await axios.get("/v1/search/shop.json", {
        params: {
          query: search,
          display: 15,
        },
        headers: {
          "X-Naver-Client-Id": NAVER_ID,
          "X-Naver-Client-Secret": NAVER_SECRET,
        },
      });

      dispatch({ type: "SUCCESS", data: items });
    } catch (err) {
      dispatch({ type: "ERROR", error: err });
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return state;
}

export default useNaver;
