import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,NavLink,Prompt,Switch, useHistory,Link} from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
export default function Seller(){
  const [nameseller,setnameseller]=useState()
  const [passwordseller,setpasswordseller]=useState()
  const [imgseller,setimgseller]=useState()
  const [background,setbackground]=useState()
  const [slide1,setslide1]=useState()
  const [slide2,setslide2]=useState()
  const [slide3,setslide3]=useState()
  const [description,setdescription]=useState()
  const [name,setname]=useState()
  const [password,setpassword]=useState()
  const history=useHistory()
  const register=(e)=>{
    e.preventDefault()
    
    axios({
      method: 'post',
      url: 'http://localhost:3000/products/seller',
      data:{
        nameseller:nameseller,
        passwordseller:passwordseller,
        imgseller:imgseller,
        background:background,
        slide1:slide1,
        slide2:slide2,
        slide3:slide3,
        description:description,
      }
    }).then(res=>{
        alert(res.data)
    }).catch(err=>{
        console.log(err)
    })
  }
  const login=(e)=>{
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:3000/products/showseller',
      data:{
        nameseller:name,
        passwordseller:password,
      }
    }).then(res=>{
        console.log(res.data)
        if(res.data){
          history.push({
            pathname:'/product/seller-add',
            state:res.data

          })
        }
    }).catch(err=>{
        console.log(err)
    })
  }
  return <div class="container ">
    <form class="container" >
    <h2>đăng kí bán hàng</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Tên người bán</label>
          <input onChange={e=>setnameseller(e.target.value)} value={nameseller}  type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">mật khẩu</label>
          <input onChange={e=>setpasswordseller(e.target.value)} value={passwordseller} type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">ảnh người bán</label>
          <input onChange={e=>setimgseller(e.target.value)} value={imgseller} type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">background trang của bạn của bạn</label>
          <input onChange={e=>setbackground(e.target.value)} value={background} type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">thêm slide 1</label>
          <input onChange={e=>setslide1(e.target.value)} value={slide1} type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">thêm slide 2</label>
          <input  onChange={e=>setslide2(e.target.value)} value={slide2}type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">thêm slide 3</label>
          <input onChange={e=>setslide3(e.target.value)} value={slide3} type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">miêu tả về shop của bạn</label>
          <input onChange={e=>setdescription(e.target.value)} value={description} type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <button onClick={register} type="submit" class="btn btn-primary">đăng kí</button>
      </form>
      <form class="container">
      <h2>đăng nhập</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Tên người bán</label>
          <input onChange={e=>setname(e.target.value)} name="name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">mật khẩu</label>
          <input onChange={e=>setpassword(e.target.value)} name="password" type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <button onClick={login}  type="submit" class="btn btn-primary">đăng nhập</button>
      </form>
  </div>
    
  
}