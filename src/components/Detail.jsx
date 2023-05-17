import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetBlogsQuery, useGetDetailBlogQuery } from "../redux/BlogApi";

const Detail = () => {
  const { id } = useParams();
  const { data: blog } = useGetDetailBlogQuery(id);
  console.log("Detail", blog);

  return (
    <div className=" flex justify-center">
      <div className=" w-64 shadow-lg p-3">
        <img src={blog?.image} className=" h-56"/>
        <div>
          <h2>{blog?.title}</h2>
          <p>{blog?.desc}</p>
        </div>
        <div className="flex justify-center gap-3">
          {/*
          <Link to={`/detail/${blog?.id}`}>
            <button className="px-3 py-1 bg-blue-800 text-white">Detail</button>
          </Link>
  */}
          <Link to={`/edit/${blog?.id}`}>
            <button className="px-3 py-1 bg-blue-800 text-white">Edit</button>
          </Link>

          <Link to={`/`}>
            <button className="px-3 py-1 bg-gray-800 text-white">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
