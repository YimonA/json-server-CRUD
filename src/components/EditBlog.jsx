import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditBlogMutation, useGetDetailBlogQuery } from '../redux/BlogApi';

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const {id}=useParams();
  const {data :blog}=useGetDetailBlogQuery(id);
  const nav=useNavigate();
  const [editBlog]=useEditBlogMutation();

  useEffect(()=>{
    setTitle(blog?.title);
    setDesc(blog?.desc);
    setImage(blog?.image);
  },[blog])

  const editHandler=(e)=>{
    e.preventDefault();
    const newData={id,title,desc,image};
    editBlog(newData);
    nav('/');
  }
  
  return (
    <div className=" flex justify-center items-center h-screen">
      <form onSubmit={editHandler} className=" shadow-lg flex flex-col w-96 gap-6 p-7">
        <h2 className="text-gray-800 text-2xl">Edit Blog</h2>
        <input
          type="text "
          defaultValue={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Title..."
          className="border-b border-b-gray-800 outline-none"
        />
        <input
          type="text "
          defaultValue={desc}
          onChange={(e)=>setDesc(e.target.value)}
          placeholder="Description..."
          className="border-b border-b-gray-800 outline-none"
        />
        <input
          type="text "
          defaultValue={image}
          onChange={(e)=>setImage(e.target.value)}
          placeholder="Image..."
          className="border-b border-b-gray-800 outline-none"
        />
        <button className="px-3 py-1 bg-blue-800 text-white">Done</button>
      </form>
    </div>
  )
}

export default EditBlog
