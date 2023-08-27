import React from "react";

const Post = (props) => {
  return (
    <div className="card w-96 bg-sky-700 text-primary-content m-3">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
