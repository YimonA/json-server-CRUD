import React from "react";
import { Link } from "react-router-dom";
import { useDeleteBlogMutation } from "../redux/BlogApi";

const BlogCard = ({ blog }) => {
  const [deleteBlog]=useDeleteBlogMutation();
  return (
    <div>
      <div className=" w-64 shadow-lg p-3">
        <img src={blog?.image} className=" h-56" />
        <div>
          <h2>{blog?.title}</h2>
          <p>{blog?.desc}</p>
        </div>
        <div className="flex justify-center gap-3">
            <Link to={`/detail/${blog?.id}`}>

            <button className="px-3 py-1 bg-blue-800 text-white">Detail</button>
            </Link>
            <button onClick={()=>deleteBlog(blog?.id)} className="px-3 py-1 bg-red-800 text-white">Delete</button>

        </div>
      </div>
    </div>
  );
};

export default BlogCard;
