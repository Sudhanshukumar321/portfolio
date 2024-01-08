import { createContext, useState } from "react";

const url = "http://hn.algolia.com/api/v1/search?query=react";

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchData = async (page=1) =>{
    setLoading(true);
    try {
      const res = await fetch(`${url}&page=${page}`);
      const data = await res.json();
      // console.log(data);
      setPage(data.page);
      setPosts(data.hits);
      setTotalPages(data.nbPages);
    } catch (error) {
      // console.log(error);
      alert(`Bad Network Connectivity: ${error}`);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function pageChangeHandler(page){
    setPage(page);
    fetchData(page);
  }
  const value = {
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    loading,
    setLoading,
    fetchData,
    pageChangeHandler,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
