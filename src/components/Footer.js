import React from "react";

function Footer() {
  return (
    <>
      <footer
        class="text-center text-lg-start py-4 bg-dark"
        style={{ backgroundColor: "#db6930" }}
      >
        <div class="container d-flex justify-content-center py-2">
          <button
            type="button"
            class="btn btn-lg btn-floating mx-2"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#3b5998",
              borderRadius: "25px",
            }}
          >
            <i class="fab fa-facebook-f"></i>
          </button>
          <button
            type="button"
            class="btn btn-lg btn-floating mx-2"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "red",
              borderRadius: "20px",
            }}
          >
            <i class="fab fa-youtube"></i>
          </button>
          <button
            type="button"
            class="btn btn-lg btn-floating mx-2"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#8a3ab9",
              borderRadius: "25px",
            }}
          >
            <i class="fab fa-instagram"></i>
          </button>
          <button
            type="button"
            class="btn btn-lg btn-floating mx-2"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "cyan",
              borderRadius: "25px",
            }}
          >
            <i class="fab fa-twitter"></i>
          </button>
        </div>

        <div
          class="text-center text-white py-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <span class="text-white"> Mujtaba.com</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
