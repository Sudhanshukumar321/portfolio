import React, { useContext, useEffect } from "react";
import "./blogContent.css";
import { Loading } from "../../loading/Loading";
import { BlogContext } from "../../../context/BlogContext";

export const BlogContent = () => {
  const { loading, posts } = useContext(BlogContext);

  console.log(posts);
  return (
    <div className="blogsContainer">
      {loading ? (
        <Loading />
      ) : posts.length === 0 ? (
        <div className="noPost" style={{textAlign:"center",height:'70vh',width:'100%'}}>
          <h1>No Post Found</h1>
        </div>
      ) : (
        posts.map((post) =>{
          const {title,author,objectID,url,num_comments} = post;
          return(
          <div className="blogCard" key={objectID}>
            <h3>{title}</h3>
            <p>By <span>{author}</span> | {num_comments} comments</p>
            <div className="blogButton">
              <a href={url} target="_blank">Read More...</a>
              <a href="#">Remove</a>
            </div>
          </div>)}
        )
      )}
    </div>
  );
};
