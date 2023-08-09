import React, { Component } from "react";

class Card extends Component {
  state = {
    order : 0
  }

  handleCounterChange = (newValueOrder) =>{
    this.props.onCounterChange(newValueOrder);
  }

  handlePlus = () =>{
    this.setState({
      order : this.state.order + 1
    }, () => {
      this.handleCounterChange(this.state.order);
    })
  }

  handleMinus = () =>{
    if(this.state.order > 0){
      this.setState({
        order : this.state.order - 1
      }, () =>{
        this.handleCounterChange(this.state.order)
      })
    }
  }

  render() {
    return (
      <div>
        <div className="card w-96 bg-gray-800 shadow-xl m-5">
          <figure className="px-10 pt-10">
            <img
              src="gambar1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Harga Diri</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={this.handleMinus}>-</button>
              <input type="text" value={this.state.order} className=" p-3 text-center rounded-md" />
              <button className="btn btn-primary" onClick={this.handlePlus}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
