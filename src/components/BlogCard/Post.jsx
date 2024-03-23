import React from "react";
import "./Blog.css";
import { useParams } from "react-router";
import { BlogData } from "./Data";
import ShareButtons from "./ShareButton";
import PopularBlogs from "./PopularBlog";
import { Link } from "react-router-dom";
import BlogFaq from "./Faq";
import { MathText } from "../mathJax/MathText.jsx";
const BlogPost = () => {
  const { topic } = useParams();

  const blogIndex = parseInt(topic?.split("_")[1]);

  const blog = BlogData[blogIndex - 1];
  const renderPreparationStrategies = (strategies) => {
    return strategies?.map((strategy, index) => {
      if (strategy?.type === "text") {
        return <p key={index}>{strategy?.content}</p>;
      } else if (strategy?.type === "image") {
        return (
          <img key={index} src={strategy?.imageUrl} alt={strategy?.altText} />
        );
      } else if (strategy?.type === "single_col_table") {
        return (
          <div key={index}>
            <div className="table-body">
              <h4>{strategy?.table?.title}</h4>
              <div style={{ padding: "10px 15px" }}>
                <div className="">
                  {strategy?.table?.data?.map((cell, idx) => (
                    <div key={idx} className="mr-4">
                      <a href="#">☛ {cell}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <br />
          </div>
        );
      } else if (strategy?.type === "also_read") {
        return (
          <>
            <h2>Also Read</h2>
            <ul>
              {strategies?.alsoRead?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      } else if (strategy.type === "conclusion") {
        return (
          <>
            <h2>Conclusion</h2>
            <p>{blog?.conclusion}</p>
          </>
        );
      } else if (strategy.type === "new_para") {
        return (
          <div className="new_para">
            <div className="heading">
              <h4 className="m-0">{strategy.heading}</h4>
            </div>
            <div className="description">
              <MathText text={strategy.content} textTag="p" />
            </div>
            <div className="read_more">
              {strategy.alsoRead && strategy.alsoRead.length > 0 && (
                <div>
                  <strong>ALSO READ -</strong>
                  {strategy.alsoRead.map((item, index) => (
                    <span style={{ color: item.color }} key={index}>
                      &nbsp;
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <section id="page-title">
        <div className="page-title max-w-[1280px] mx-auto">
          <h1>{blog?.title}</h1>
          <div class="breadcrumb">
            <ul>
              <li>
                <Link to="/" style={{ textTransform: "uppercase" }}>
                  CUET - TESTKNOCK{" "}
                </Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px]">
        <div id="blog" className="single-post">
          <div className="post-item flex flex-wrap">
            <div className="post-item-wrap mb-8 md:max-w-[70%] md:flex-1 md:order-1">
              <div className="post-image">
                <img src={blog.image.url} alt={blog.image.alt} />
              </div>
              <div className="post-item-description">
                <h2>{blog?.title}</h2>
                <div className="text-justify">
                  {renderPreparationStrategies(blog?.preparationStrategies)}
                </div>
                <div className="mt-5">
                  <ShareButtons />
                </div>
              </div>
            </div>
            <div className="popular-blogs md:max-w-[30%] md:order-2 sticky top-0 h-12">
              <PopularBlogs />
            </div>
          </div>
        </div>
        <BlogFaq />
      </section>
    </div>
  );
};

export default BlogPost;
