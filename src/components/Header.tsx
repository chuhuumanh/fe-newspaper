import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    // Đóng menu khi nhấn phím Esc
    const handleKeyUp = (event:any) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return (
    <>
      <div
        className={`main-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
      <header className="header-default">
        <nav className="navbar navbar-expand-lg">
          <div className="container-xl">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.svg" alt="logo" />
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown active">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="category.html">
                    Lifestyle
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="category.html">
                    Inspiration
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#">
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="category.html">
                        Category
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-single.html">
                        Blog Single
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-single-alt.html">
                        Blog Single Alt
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <ul className="social-icons list-unstyled list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-medium" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
              <div className="header-buttons">
                <button className="search icon-button" onClick={toggleSearch}>
                  <i className="icon-magnifier" />
                </button>
                <button
                  className="burger-menu icon-button"
                  onClick={toggleMenu}
                >
                  <span className="burger-icon" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`canvas-menu d-flex align-items-end flex-column ${
          isMenuOpen ? "open" : ""
        }`}
      >
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={closeMenu}
        />
        <div className="logo">
          <img src="images/logo.svg" alt="Katen" />
        </div>
        <nav>
          <ul className="vertical-menu">
            <li className="active">
              <a href="index.html">Home</a>
              <ul className="submenu">
                <li>
                  <a href="index.html">Magazine</a>
                </li>
                <li>
                  <a href="personal.html">Personal</a>
                </li>
                <li>
                  <a href="personal-alt.html">Personal Alt</a>
                </li>
                <li>
                  <a href="minimal.html">Minimal</a>
                </li>
                <li>
                  <a href="classic.html">Classic</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="category.html">Lifestyle</a>
            </li>
            <li>
              <a href="category.html">Inspiration</a>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="submenu">
                <li>
                  <a href="category.html">Category</a>
                </li>
                <li>
                  <a href="blog-single.html">Blog Single</a>
                </li>
                <li>
                  <a href="blog-single-alt.html">Blog Single Alt</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <ul className="social-icons list-unstyled list-inline mb-0 mt-auto w-100">
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-pinterest" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-medium" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>

      <div className={`search-popup ${isSearchOpen ? "visible" : ""}`}>
        <button type="button" className="btn-close" onClick={closeSearch}>
          <i className="icon-close" />
        </button>
        <div className="search-content">
          <div className="text-center">
            <h3 className="mt-0 mb-5">Press ESC to close</h3>
          </div>
          <form className="d-flex flex-column align-items-center">
            <div className="d-flex w-100">
              <input type="text" placeholder="Search" className="form-control" />
              <button type="submit" className="btn btn-primary ml-2">
                <i className="icon-magnifier" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
