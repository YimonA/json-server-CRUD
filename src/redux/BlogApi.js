import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BlogApi = createApi({
  reducerPath: "BlogApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000` }),
  tagTypes: ["blog"],

  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `/blogs`,
      providesTags: ["blog"],
    }),
    getDetailBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["blog"],
    }),
    createBlog: builder.mutation({
      query: (blog) => ({
        url: "/blogs",
        method: "POST",
        body: blog,
      }),
      invalidatesTags:["blog"]
    }),
    deleteBlog: builder.mutation({
        query: (id) => ({
          url: `/blogs/${id}`,
          method: "DELETE",
        }),
        invalidatesTags:["blog"]
      }),
      editBlog: builder.mutation({
        query: (newData) => ({
          url: `/blogs/${newData?.id}`,
          method: "PATCH",
          body: newData,
        }),
        invalidatesTags:["blog"]
      }),
    
  }),
});

export const { useGetBlogsQuery, useGetDetailBlogQuery,useCreateBlogMutation ,useDeleteBlogMutation,useEditBlogMutation} = BlogApi;
