import React, { Fragment } from "react";

const Post2 = (props) => {
  return (
    <Fragment>
      <div className="card w-96 bg-gray-700 shadow-xl m-2">
        <figure className="px-10 pt-10">
          <img
            src="Iphone13.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.desc}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Post2;
