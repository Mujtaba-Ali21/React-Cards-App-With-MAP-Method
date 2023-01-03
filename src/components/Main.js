import React from "react";

function Home(props) {
  return (
    <>
      <div
        className="card my-5 mx-auto bg-dark text-light"
        style={{ width: "18rem" }}
      >
        <img src={props.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <h3 className="card-title my-3">{props.price}</h3>
          <button className="btn btn-success px-3 py-2">Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default Home;
