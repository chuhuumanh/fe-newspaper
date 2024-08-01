import React from "react";

export default function ListCategoryArticles() {
  return (
    <div>
      {" "}
      <div className="section-header">
        <h3 className="section-title">Editor’s Pick</h3>
        <img src="images/wave.svg" className="wave" alt="wave" />
      </div>
      <div className="padding-30 rounded bordered">
        <div className="row gy-5">
          <div className="col-sm-6">
            {/* post */}
            <div className="post">
              <div className="thumb rounded">
                <a
                  href="category.html"
                  className="category-badge position-absolute"
                >
                  Lifestyle
                </a>
                <span className="post-format">
                  <i className="icon-picture" />
                </span>
                <a href="blog-single.html">
                  <div className="inner">
                    <img src="images/posts/editor-lg.jpg" alt="post-title" />
                  </div>
                </a>
              </div>
              <ul className="meta list-inline mt-4 mb-0">
                <li className="list-inline-item">
                  <a href="#">
                    <img
                      src="images/other/author-sm.png"
                      className="author"
                      alt="author"
                    />
                    Katen Doe
                  </a>
                </li>
                <li className="list-inline-item">29 March 2021</li>
              </ul>
              <h5 className="post-title mb-3 mt-3">
                <a href="blog-single.html">
                  15 Unheard Ways To Achieve Greater Walker
                </a>
              </h5>
              <p className="excerpt mb-0">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            {/* post */}
            <div className="post post-list-sm square">
              <div className="thumb rounded">
                <a href="blog-single.html">
                  <div className="inner">
                    <img src="images/posts/editor-sm-1.jpg" alt="post-title" />
                  </div>
                </a>
              </div>
              <div className="details clearfix">
                <h6 className="post-title my-0">
                  <a href="blog-single.html">
                    3 Easy Ways To Make Your iPhone Faster
                  </a>
                </h6>
                <ul className="meta list-inline mt-1 mb-0">
                  <li className="list-inline-item">29 March 2021</li>
                </ul>
              </div>
            </div>
            {/* post */}
            <div className="post post-list-sm square">
              <div className="thumb rounded">
                <a href="blog-single.html">
                  <div className="inner">
                    <img src="images/posts/editor-sm-2.jpg" alt="post-title" />
                  </div>
                </a>
              </div>
              <div className="details clearfix">
                <h6 className="post-title my-0">
                  <a href="blog-single.html">
                    An Incredibly Easy Method That Works For All
                  </a>
                </h6>
                <ul className="meta list-inline mt-1 mb-0">
                  <li className="list-inline-item">29 March 2021</li>
                </ul>
              </div>
            </div>
            {/* post */}
            <div className="post post-list-sm square">
              <div className="thumb rounded">
                <a href="blog-single.html">
                  <div className="inner">
                    <img src="images/posts/editor-sm-3.jpg" alt="post-title" />
                  </div>
                </a>
              </div>
              <div className="details clearfix">
                <h6 className="post-title my-0">
                  <a href="blog-single.html">
                    10 Ways To Immediately Start Selling Furniture
                  </a>
                </h6>
                <ul className="meta list-inline mt-1 mb-0">
                  <li className="list-inline-item">29 March 2021</li>
                </ul>
              </div>
            </div>
            {/* post */}
            <div className="post post-list-sm square">
              <div className="thumb rounded">
                <a href="blog-single.html">
                  <div className="inner">
                    <img src="images/posts/editor-sm-4.jpg" alt="post-title" />
                  </div>
                </a>
              </div>
              <div className="details clearfix">
                <h6 className="post-title my-0">
                  <a href="blog-single.html">
                    15 Unheard Ways To Achieve Greater Walker
                  </a>
                </h6>
                <ul className="meta list-inline mt-1 mb-0">
                  <li className="list-inline-item">29 March 2021</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" data-height={50} />
    </div>
  );
}
