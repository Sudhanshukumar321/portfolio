import React from "react";
import "./blog.css";
import { BlogHeading } from "./blogHeading/BlogHeading";
import { BlogContent } from "./blogContent/BlogContent";
import { BlogFooter } from "./blogFooter/BlogFooter";

const Blog = () => {
  return (
    <div className="blog">
        <BlogHeading />
        <BlogContent />
        <BlogFooter />
    </div>
  );
};

export default Blog;
