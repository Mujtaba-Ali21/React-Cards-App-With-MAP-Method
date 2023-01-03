import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand text-light" style={{ cursor: "pointer" }}>
          Weird Gadgets.com
        </span>
        <button
          className="navbar-toggler"
          style={{ backgroundColor: "white" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ backgroundColor: "white" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2  mx-2 mb-lg-0">
            <li className="nav-item">
              <span
                className="nav-link active text-light"
                aria-current="page"
                style={{ cursor: "pointer" }}
              >
                Weird Gadgets
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                aria-current="page"
                style={{ cursor: "pointer", color: "gray" }}
              >
                More Weird Gadgets
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                aria-current="page"
                style={{ cursor: "pointer", color: "gray" }}
              >
                More More Weird Gadgets
              </span>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
