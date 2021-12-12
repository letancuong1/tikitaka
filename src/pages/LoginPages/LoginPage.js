import {useState,useEffect} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { customers } from './../../redux/redux'
import { userInformation } from './../../redux/redux'
import { AddortherInformation,ortherInformation } from './../../redux/redux'

// import firebase,{auth,db} from '../../firebase/configs'
import {authentication} from '../../firebase/configs';
import {signInWithPopup,FacebookAuthProvider} from 'firebase/auth'

// const fbProvider=new auth.FacebookAuthProvider()
var classNames = require('classnames');
export default function LoginPage(){
  const Customers= useSelector(customers)
  const dispatch = useDispatch()
  let history = useHistory();
  const state=history.location.state
  const [name,setname]=useState(state?state.name:null);
  const [password,setpassword]=useState(state?state.password:null)

  

  const submit=(e)=>{
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:3000/account/login',
      data:{
        name:name,
        password:password
      }
    }).then(res=>{
        if(res.data){
          history.push('/')
          dispatch(userInformation(res.data))
          dispatchOrther(res.data._id)
          localStorage.setItem('customers',JSON.stringify(res.data))
        }else{
          alert('tài khoản sai rồi bạn')
        }
    }).catch(err=>{
        console.log(err)
    })
  };
  const dispatchOrther=(a)=>{
    console.log(a)
    axios({
      method: 'post',
      url: 'http://localhost:3000/products/showorther',
      data:{
        id:a
      }
    }).then(res=>{
        dispatch(ortherInformation(res.data))
    }).catch(err=>{
        console.log(err) 
    })
  }
  const loginfb=()=>{
    const fbProvider=new FacebookAuthProvider();
    signInWithPopup(authentication,fbProvider)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }
  // auth.onAuthStateChanged(user => {
  //     console.log({user})
  //   })
    return <div>
     
      <form class="container" onSubmit={(e)=>submit(e)}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Tên tài khoản</label>
          <input value={name} onChange={(e)=>setname(e.target.value)} name="name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">mật khẩu</label>
          <input value={password} onChange={(e)=>setpassword(e.target.value)} name="password" type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <button  type="submit" class="btn btn-primary">đăng nhập</button>
      </form>
      <button onClick={loginfb} >đăng nhập với facebook</button>
    </div>
  
}
 