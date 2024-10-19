import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Fotter/Footer";
import BlogCard from "../components/BlogCard";
import blogData from "../blogData";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-[25px] max-w-[1082px]  mx-auto">
        {
            blogs.map((blog)=>{
              return  <BlogCard

                date={blog.date}
                img={blog.img}
                title={blog.title}
                dec={blog.dec }
              />
            })
        }
       
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
