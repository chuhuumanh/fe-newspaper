import React from "react";

export default function Hero() {
  return (
    <div>
      <section id="hero">
        <div className="container-xl">
          <div className="row gy-4">
            <div className="col-lg-8">
              {/* featured post large */}
              <div className="post featured-post-lg">
                <div className="details clearfix">
                  <a href="category.html" className="category-badge">
                    Inspiration
                  </a>
                  <h2 className="post-title">
                    <a href="blog-single.html">
                      5 Easy Ways You Can Turn Future Into Success
                    </a>
                  </h2>
                  <ul className="meta list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="#">Katen Doe</a>
                    </li>
                    <li className="list-inline-item">29 March 2021</li>
                  </ul>
                </div>
                <a href="blog-single.html">
                  <div className="thumb rounded">
                    <div
                      className="inner data-bg-image"
                      data-bg-image="images/posts/featured-lg.jpg"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              {/* post tabs */}
              <div className="post-tabs rounded bordered">
                {/* tab navs */}
                <ul
                  className="nav nav-tabs nav-pills nav-fill"
                  id="postsTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      aria-controls="popular"
                      aria-selected="true"
                      className="nav-link active"
                      data-bs-target="#popular"
                      data-bs-toggle="tab"
                      id="popular-tab"
                      role="tab"
                      type="button"
                    >
                      Popular
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      aria-controls="recent"
                      aria-selected="false"
                      className="nav-link"
                      data-bs-target="#recent"
                      data-bs-toggle="tab"
                      id="recent-tab"
                      role="tab"
                      type="button"
                    >
                      Recent
                    </button>
                  </li>
                </ul>
                {/* tab contents */}
                <div className="tab-content" id="postsTabContent">
                  {/* loader */}
                  <div className="lds-dual-ring" />
                  {/* popular posts */}
                  <div
                    aria-labelledby="popular-tab"
                    className="tab-pane fade show active"
                    id="popular"
                    role="tabpanel"
                  >
                    {/* post */}
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="blog-single.html">
                          <div className="inner">
                            <img
                              src="images/posts/tabs-1.jpg"
                              alt="post-title"
                            />
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
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="blog-single.html">
                          <div className="inner">
                            <img
                              src="images/posts/tabs-2.jpg"
                              alt="post-title"
                            />
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
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="blog-single.html">
                          <div className="inner">
                            <img
                              src="images/posts/tabs-3.jpg"
                              alt="post-title"
                            />
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
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="blog-single.html">
                          <div className="inner">
                            <img
                              src="images/posts/tabs-4.jpg"
                              alt="post-title"
                            />
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
                  {/* recent posts */}
                  <div
                    aria-labelledby="recent-tab"
                    className="tab-pane fade"
                    id="recent"
                    role="tabpanel"
                  >
                    {/* post */}
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="blog-single.html">
                          <div className="inner">
                            <img
                              src="images/posts/tabs-2.jpg"
                              alt="post-title"
                            />
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
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="blog-single.html">
                          <div className="inner">
                            <img
                              src="images/posts/tabs-1.jpg"
                              alt="post-title"
                            />
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
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="blog-single.html">
                          <div className="inner">
                            <img
                              src="images/posts/tabs-4.jpg"
                              alt="post-title"
                            />
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
                    {/* post */}
                    <div className="post post-list-sm circle">
                      <div className="thumb circle">
                        <a href="blog-single.html">
                          <div className="inner">
                            <img
                              src="images/posts/tabs-3.jpg"
                              alt="post-title"
                            />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
