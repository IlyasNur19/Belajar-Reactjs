import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';
import Post2 from './Post2';

export default class Blog extends Component {
  state = {
    post : []
  }

  getPostApi = () =>{
    axios.get('http://localhost:3000/posts')
      .then((res)=>{
        this.setState({
          post : res.data
        })
      })
  }

  handleDelete = (data) =>{
    axios.delete(`http://localhost:3000/posts/${data}`)
      .then((res) => {
        this.getPostApi()
      })
  }

  componentDidMount(){
    this.getPostApi()
  }

  render() {
    return (
      <div className='flex flex-wrap justify-center'>
        {
          this.state.post.map(post => {
            return <Post key={post.id} data={post} delete={this.handleDelete}/>
          })
        }
      </div>
    )
  }
}
