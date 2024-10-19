import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogData from "../blogData";
import Header from "../components/Header/Header";
import Footer from "../components/Fotter/Footer";

function BlogItem() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const currentBlog = blogData.find((blog) => blog.id == id);
    setBlog(currentBlog);
  }, [id]);

  return (
    <div>
      <Header />

      {console.log(blog)}
      <div className="flex flex-col mx-auto max-w-[1080px] ">
        <img src={`${blog?.img}`} alt="" />
        {blog?.data}
      </div>
      <Footer />
    </div>
  );
}

export default BlogItem;
