import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import  Context  from "../CommunityBlogs/Context";

const initialData = { title: "", username: "", category: "", description: "" };

const CreateBlog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(initialData);
  const { createBlog, updateBlog, state } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (blogId === undefined) createBlog(blog);
    else updateBlog(blogId, blog);
    clearData();
  };

  const clearData = () => {
    setBlog(initialData);
    navigate("..blogs");
  };

  useEffect(() => {
    if (blogId !== undefined) setBlog(state.find((s) => s?._id === blogId));
    else setBlog(initialData);
  }, [blogId, state]);

  return (
    <form
      onSubmit={handleSubmit}
      className="card d-flex flex-column gap-3 p-4 m-5"
    >
      <h2 className="text-center">
        {blogId === undefined ? "Create" : "Update"} Blog
      </h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          className="form-control"
          id="title"
          aria-describedby="titleHelp"
          required
          placeholder="Enter title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={blog.username}
          className="form-control"
          id="username"
          required
          placeholder="Enter Username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          value={blog.category}
          onChange={handleChange}
          className="form-control"
          id="category"
          required
          placeholder="Enter Category"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          value={blog.description}
          onChange={handleChange}
          className="form-control"
          id="description"
          required
          rows="5"
          placeholder="Enter Description"
        />
      </div>
      <button type="submit" className="btn btn-dark">
        {blogId === undefined ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default CreateBlog;
