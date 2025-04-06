import React from "react";
import '../index.css'
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom  ">
      <div class="container p-2 ">
        <a href="" className="navbar-brand">
          <img src="media/images/logo.svg" alt="#" style={{ width: "25%" }} />
        </a>

        <div class="collapse navbar-collapse d-flex justify-content-end"  id="navbarNav">
            <form action="">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Signup
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
               Support
              </a>
            </li>
          </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
