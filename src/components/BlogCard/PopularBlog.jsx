import React from "react";
import { BlogData } from "./Data";
import { Link } from "react-router-dom";

const PopularBlog = () => {
  return (
    <div>
      <div
        className="sidebar sticky-sidebar col-lg-3"
        style={{
          position: "sticky",
          top: "0px",
        }}
      >
        <div
          className="theiaStickySidebar"
          style={{
            paddingTop: "0px",
            paddingBottom: "1px",
          }}
        >
          <div className="widget">
            {" "}
            <div className="tabs">
              <ul className="nav nav-tabs" id="tabs-posts" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#popular"
                    role="tab"
                    aria-controls="popular"
                    aria-selected="true"
                  >
                    Popular
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="tabs-posts-content">
                <div
                  className="tab-pane fade show active"
                  id="popular"
                  role="tabpanel"
                  aria-labelledby="popular-tab"
                >
                  <div className="post-thumbnail-list">
                    <div className="post-thumbnail-list">
                      {BlogData.map((blog, index) => (
                        <div className="post-thumbnail-entry" key={index}>
                          <img alt={blog.title} src={blog.image.url} />
                          <div className="post-thumbnail-content">
                            <Link href={blog.to}>{blog.title}</Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBlog;
