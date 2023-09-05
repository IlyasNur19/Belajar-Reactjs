import React, { Fragment, useState } from "react";
import Alert from "./Alert";

const Post = (props) => {
  const [openModal , setOpenModal] = useState(false);

  const toggleModal = () =>{
    setOpenModal(!openModal);
  }

  const toggleUpdate = () =>{
    props.tombolTambah();
    toggleModal();
  } 

  const Main = () =>{
    props.update(props.data);
    toggleModal();
  }
  return (
    <Fragment>
      {openModal && (
        <div className="CardForm bg-gray-800 w-[450px] flex flex-col p-3 rounded-md fixed m-auto right-0 left-0 z-[11]">
          <h1 className=" font-bold my-3">Tambah Data</h1>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className=" text-center my-2 h-14 rounded-md"
            onChange={props.changeInput}
            value={props.valueTitle}
          />
          <textarea
            name="body"
            id="body"
            cols="20"
            rows="8"
            placeholder="Body"
            className=" p-3 rounded-md"
            onChange={props.changeInput}
            value={props.valueBody}
          ></textarea>
          <button className=" my-3 bg-blue-400" onClick={() => toggleUpdate()}>Update</button>
          <button className=" bg-red-400" onClick={toggleModal}>Kembali</button>
        </div>
      )}
      <div className="card w-96 bg-sky-700 text-primary-content m-3">
        <div className="card-body">
          <h2 className="card-title">{props.data.title}</h2>
          <p>{props.data.body}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-400 text-slate-200 border-none" onClick={() => props.delete(props.data.id)} >Delete</button>
            <button className="btn bg-blue-300 text-slate-200 border-none" onClick={() => Main()} >Update</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Post;
