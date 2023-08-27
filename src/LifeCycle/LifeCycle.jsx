import React, { Component, Fragment } from "react";

class LifeCycle extends Component{
    
    constructor (props) {
        super(props)
        this.state = {
            count : 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        if(nextState.count >= 4){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState, snapshot){
        console.log('getSnapshotBeforeUpdate')
        return true;
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    conterChange = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return(
                <button className="btn btn-primary" onClick={this.conterChange}>Click {this.state.count}</button>
        )
    }
}

export default LifeCycle;