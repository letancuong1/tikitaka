import React,{Component} from 'react';
import axios from 'axios'
import {BrowserRouter as Router,Route,NavLink,Prompt} from 'react-router-dom'
export default class RegisterPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:null,
      password:null,
      adress:null,
      phone:null,
      img:null,
    }
  }
  change=(e)=>{
    var a=e.target.name
    this.setState({
      [a]:e.target.value
    })
  }
  submit=(e)=>{
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:3000/account/register',
      data:this.state
    }).then(res=>{
        if(res.data){
          alert(res.data)
        }
    }).catch(err=>{
        console.log(err)
    })
    this.props.history.push({pathname:"/login",state:this.state})
  }
  render(){
    return <div>
      <form class="container" onSubmit={this.submit} >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Tên tài khoản</label>
          <input value={this.state.name} onChange={this.change} name="name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">mật khẩu</label>
          <input value={this.state.password} onChange={this.change} name="password" type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="adress" class="form-label">địa chỉ</label>
          <input value={this.state.adress} onChange={this.change} name="adress" type="text" class="form-control" id="adress"/>
        </div>
        <div class="mb-3">
          <label for="phonenumber" class="form-label">số điện thoại</label>
          <input value={this.state.phone} onChange={this.change} name="phone" type="text" class="form-control" id="phonenumber"/>
        </div>
        <div class="mb-3">
          <label for="img" class="form-label">ảnh đại diện</label>
          <input value={this.state.img} onChange={this.change} name="img" type="text" class="form-control" id="img"/>
        </div>
        <button  type="submit" class="btn btn-primary">đăng kí</button>
      </form>
    </div>
  }
}
 