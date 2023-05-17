import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateBlogMutation } from "../redux/BlogApi";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [ createBlog ,{isLoading}] = useCreateBlogMutation();

  const nav=useNavigate();

  const createBlogHandler = (e) => {
    e.preventDefault();
    const data={id:Date.now(),title,desc,image};
    createBlog(data);
    nav('/');
    console.log(data);
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <form onSubmit={createBlogHandler} className=" shadow-lg flex flex-col w-96 gap-6 p-7">
        <h2 className="text-gray-800 text-2xl">Create Blog</h2>
        <input
          type="text "
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Title..."
          className="border-b border-b-gray-800 outline-none"
        />
        <input
          type="text "
          value={desc}
          onChange={(e)=>setDesc(e.target.value)}
          placeholder="Description..."
          className="border-b border-b-gray-800 outline-none"
        />
        <input
          type="text "
          value={image}
          onChange={(e)=>setImage(e.target.value)}
          placeholder="Image..."
          className="border-b border-b-gray-800 outline-none"
        />
        <button className="px-3 py-1 bg-blue-800 text-white">Create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
