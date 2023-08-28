import React from "react";

const Post = (props) => {
  return (
    <div className="card w-96 bg-sky-700 text-primary-content m-3">
      <div className="card-body">
        <h2 className="card-title">{props.data.title}</h2>
        <p>{props.data.body}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-red-400 text-slate-200 border-none" onClick={() => props.delete(props.data.id)} >Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
