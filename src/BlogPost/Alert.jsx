import React, { useState } from "react";

const Alert = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const multiToggle = () =>{
    props.tombolTambah();
    toggleModal();
  }
  return (
    <div className=" text-center">
      <button className=" m-2" onClick={toggleModal}>Tambah</button>
      {openModal && (
        <div className="CardForm bg-gray-800 w-[450px] flex flex-col p-3 rounded-md absolute m-auto right-0 left-0 z-[11]">
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
            cols="30"
            rows="10"
            placeholder="Body"
            className=" p-3 rounded-md"
            onChange={props.changeInput}
            value={props.valueBody}
          ></textarea>
          <button className=" my-3 bg-blue-400" onClick={()=> multiToggle()}>Tambah</button>
          <button className=" bg-red-400" onClick={toggleModal}>Kembali</button>
        </div>
      )}
    </div>
  );
};

export default Alert;
