import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';

export default class Blog extends Component {
  state = {
    post : []
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({
    //       post: json
    //     })
    //   })

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>{
        this.setState({
          post : res.data
        })
      })
  }

  render() {
    return (
      <div className='flex flex-wrap justify-center p-3 '>
        {
          this.state.post.map(post => {
            return <Post key={post.id} title={post.title} desc={post.body}/>
          })
        }
      </div>
    )
  }
}
