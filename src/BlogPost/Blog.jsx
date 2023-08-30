import React, { Component, Fragment } from 'react';
import Post from './Post';
import axios from 'axios';
import Alert from './Alert';

export default class Blog extends Component {
  state = {
    post : [],
    formBlog : {
      id : 1,
      title : '',
      body : '',
      userId : 1
    }
  }

  getPostApi = () =>{
    axios.get('http://localhost:3000/posts?_sort=id&_order=desc')
      .then((res)=>{
        this.setState({
          post : res.data
        })
      })
  }

  postDataAPI = () =>{
    axios.post('http://localhost:3000/posts', this.state.formBlog)
    .then((ress) => {
      console.log(ress);
      this.getPostApi()
    }, (err) => {
      console.log(err)
    })
  }

  handleDelete = (data) =>{
    axios.delete(`http://localhost:3000/posts/${data}`)
      .then((res) => {
        this.getPostApi()
      })
  }
  handleFormChange = (event) =>{
    let formBlogNew = {...this.state.formBlog}
    formBlogNew[event.target.name] = event.target.value
    let timeStamp = new Date().getTime()
    formBlogNew['id'] = timeStamp
    let title = event.target.value
    this.setState({
      formBlog : formBlogNew
    })
  }

  handleTambah= () =>{
    this.postDataAPI()
  }

  componentDidMount(){
    this.getPostApi()
  }

  render() {
    return (
      <Fragment>
        <Alert changeInput={this.handleFormChange} tombolTambah={this.handleTambah}/>
        <div className='flex flex-wrap justify-center'>
          {
            this.state.post.map(post => {
              return <Post key={post.id} data={post} delete={this.handleDelete}/>
            })
          }
        </div>
      </Fragment>
    )
  }
}
