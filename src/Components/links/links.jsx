import React from "react";
import { Link } from "react-router-dom";
function links() {
  return (
    <div className="links">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <h4 className="navbar-brand mb-0 h1"> landing page</h4>
          </Link>
          <Link to="/timer">
            <h4 className="navbar-brand mb-0 h1"> timer</h4>
          </Link>
          <Link to="/dice">
            <h4 className="navbar-brand mb-0 h1">dice</h4>
          </Link>
        </div>
      </nav>

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid"></div>
      </nav>
    </div>
  );
}

export default links;
