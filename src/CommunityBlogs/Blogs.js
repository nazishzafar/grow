import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import  Context  from "../CommunityBlogs/Context";


const Blogs = () => {
  const { state, getBlogs, deleteBlog } = useContext(Context);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteBlog(id);
  };

  const handleUpdate = (id) => {
    navigate(`../update-blog/${id}`);
  };

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <div className="d-flex gap-3 justify-content-center flex-wrap m-4">
      {state.map((blog) => (
        <div key={blog?._id} className="card" style={{ width: "17rem" }}>
        
          <div className="card-body">
            <h5 className="card-title">{blog?.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{blog?.category}</h6>
            <h6
              className="card-subtitle mb-2 text-muted"
              style={{ fontSize: "0.6rem" }}
            >
              {blog?.username}
            </h6>
            <p className="card-text">{blog?.description}</p>
            <div className="d-flex gap-2 justify-content-between">
              <button
                onClick={() => handleDelete(blog?._id)}
                className="btn btn-dark"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(blog?._id)}
                className="btn btn-dark"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default Blogs;
