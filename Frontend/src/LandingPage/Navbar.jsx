import React from "react";
import '../index.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom  ">
      <div class="container p-2 ">
        <a href="/" className="navbar-brand">
          <img src="media/images/logo.svg" alt="#" style={{ width: "25%" }} />
        </a>

        <div class="collapse navbar-collapse d-flex justify-content-end"  id="navbarNav">
            <form action="">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link class="nav-link active" aria-current="page" to="/SignUp">
                Signup
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/About">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/Support">
               Support
              </Link>
            </li>
          </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
