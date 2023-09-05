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
    },
    isUpdate: false
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
      this.setState({
        formBlog : {
          id : 1,
          title : '',
          body : '',
          userId : 1
        }
      })
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

  putDataToAPI = () =>{
    axios.put(`http://localhost:3000/posts/${this.state.formBlog.id}`, this.state.formBlog)
    .then((res) => {
      console.log(res);
      this.getPostApi();
      this.setState({
        isUpdate : false,
        formBlog : {
          id : 1,
          title : '',
          body : '',
          userId : 1
        }

      })
    })
  } 

  handleFormChange = (event) =>{
    let formBlogNew = {...this.state.formBlog}
    formBlogNew[event.target.name] = event.target.value
    let timeStamp = new Date().getTime()
    if(!this.state.isUpdate){
      formBlogNew['id'] = timeStamp;
    }
    let title = event.target.value
    this.setState({
      formBlog : formBlogNew
    })
  }

  handleUpdate = (data) =>{
    console.log(data)
    this.setState({
      formBlog : data,
      isUpdate: true
    })
  }

  handleTambah= () =>{
    if(this.state.isUpdate){
       this.putDataToAPI()
    }else{
      this.postDataAPI()
    }
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
              return <Post key={post.id} data={post} delete={this.handleDelete} update={this.handleUpdate} valueTitle={this.state.formBlog.title} valueBody={this.state.formBlog.body} changeInput={this.handleFormChange} tombolTambah={this.handleTambah} />
            })
          }
        </div>
      </Fragment>
    )
  }
}
