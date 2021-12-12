import {useEffect,useState,Suspense} from 'react'
import { render } from '@testing-library/react';
import {BrowserRouter as Router,Route,NavLink,Prompt,Link,useHistory} from 'react-router-dom'
import routes from './routers'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {customers} from './redux/redux'
import ListProduct from './components/listproduct'
import { userInformation } from './redux/redux'
import { AddortherInformation,ortherInformation} from './redux/redux'
import { browserHistory } from "react-router-dom";
import { orther } from './redux/redux'
import './home.css'
export default function Home(){
  const other=useSelector(orther)
  const history=useHistory()
  const Customers=useSelector(customers)
  const dispatch=useDispatch(userInformation)
  const [orthers,setorthers]=useState(null);
  const [cart,setcart]=useState(false);
  const routers=routes;
  if(routers){
    var ham=routers.map((route,index)=>{
      return <Route path={route.path} exact={route.exact} component={route.main}/>
    })
  } 
  const bien=useEffect(async() => {
    const customersfromLC=await JSON.parse(localStorage.getItem('customers'))
    dispatch(userInformation(customersfromLC))
    var appea=null
    return await axios({
      method: 'post',
      url: 'http://localhost:3000/products/showorther',
      data:{
        id:customersfromLC?._id
      }
    }).then(res=>{
        setorthers(res.data)
        res.data?.map((item)=>{
          dispatch(AddortherInformation(item))
        })
    }).catch(err=>{
        console.log(err) 
    })

  },[]);
  const Logout=(e)=>{
    localStorage.setItem('customers',null)
    dispatch(userInformation(null))
    dispatch(ortherInformation(null))
  }
  const appear=()=>{
    // setcart(!cart)
  }
  // const checknull=(a)=>{
  //   // if(orthers){
  //   //   orthers.map((orther)=>{
  //   //     return <h1>ái này không hiện</h1>
  //   //   })

  //   // }

  // }
  return <div>
    <Router>
      <div class="top_bar">
        <div class="top_bar_1">
          <div class="top_bar_1_1">
            <div class="logo">
              <img class="logo_tiki" src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"/>
            </div>
            <div class="search_top">
              <input type="" placeholder="Tìm sản phẩm,danh mục hay thương hiệu mong muốn..." name=""/>
              <button>
                <img src="  https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"/>
                Tìm kiếm
            </button>
            </div>
            <div class="account_cart">
              <div class="account">
                <img style={{width:'32px',height:'32px',marginTop:'4px'}} src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"/>
                <span class="account_tiki">
                  <span class="account_tiki_1">Tài Khoản</span>
                  <span class="account_tiki_2">
                    <span>{Customers?Customers.name:null}</span>
                    <img style={{width:'16px',height:'16px'}} src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"/>
                  </span>
                  <div class="hover_account">
                    <div class="hover_account_1">
                      <a href="">
                      <p>Đơn hàng của tôi</p>
                    </a>
                    <a href="">
                      <p>Thông báo của tôi</p>
                    </a>
                    <a href="">
                      <p>Tài khoản của tôi</p>
                    </a>
                    <a href="">
                      <p>Nhận xét sản phẩm đã mua</p>
                    </a>
                    <a href="">
                      <p>Tài khoản của tôi</p>
                    </a>
                    </div>
                  </div>
                </span>
              </div>
              <div class="cart">
                <Link to={{pathname:'/cart',state:orthers}}>
                  <div class="cart_quantity">
                    <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"/>
                    <span class="cart_span">{other?other?.length:'0'}</span>
                  </div>
                  <p>Giỏ Hàng</p>
                </Link>
              </div>
            </div>
            <div>
              
            </div>
          </div>
        </div>
        <div>
          <div class="bottom_bar">
            <a href=""><img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"/></a>
            <div class="list_bottom">
              <a href="">tất cả thịt rau củ</a>
              <a href="">thịt</a>
              <a href="">hàng đông lạnh</a>
              <a href="">trái cây</a>
              <a href="">hải sản</a>
              <a href="">gạo</a>
            </div>
          <a class="seller" href="">
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg"/>
            <span>bán hàng cùng tiki</span>
          </a>
        </div>
        </div>
        </div>
      {ham}
    </Router>
  </div>
}
// <div>
//         <h2>{Customers?Customers.name:null}</h2>
//         <img style={Customers?{width:'80px',height:'80px'}:{display:'none'}} src={Customers?Customers.img:''}/>
//       </div>
//       <div  style={Customers?{display:'block'}:{display:'none'}} ><Link to="/login" onClick={Logout}>Đăng xuất</Link></div>
//       <Link to={{pathname:'/cart',state:orthers}} onClick={appear} >giỏ hàng:{other?other?.length:'giỏ'}</Link>