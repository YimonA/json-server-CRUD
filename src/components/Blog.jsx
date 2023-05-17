import React from "react";
import { Link } from "react-router-dom";
import { useGetBlogsQuery } from "../redux/BlogApi";
import BlogCard from "./BlogCard";

const Blog = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery();
  console.log(blogs);

  if (isLoading) {
    return (
      <div className=" flex justify-center item-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className=" flex justify-center my-7">
        <Link to={`/create`}>
          <button className="px-3 py-1 bg-blue-800 text-white">
            Create Blog
          </button>
        </Link>
      </div>

      <div className=" flex flex-wrap gap-7 justify-center">
        {blogs?.map((blog) => {
          return <BlogCard key={blog?.id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
