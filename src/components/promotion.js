import {useState,useEffect} from 'react';
import './promotion.css'
import {BrowserRouter as Router,Route,NavLink,Prompt,Switch, useHistory,Link} from 'react-router-dom'
import axios from 'axios'
export default function Promotion(){
  const [product,setproduct]=useState()
  const [nextproduct,setnextproduct]=useState(0)
  useEffect(async() => {
    await axios({
      method: 'get',
      url: 'http://localhost:3000/products/listproduct',
    }).then(res=>{
        setproduct(res.data)
    }).catch(err=>{
        console.log(err)
    })
    var a=document.querySelectorAll('.price_shock')
    for(var i=0;i>=6;i++){
      a[i].style.display="none"
    }
    
  },[]);
  const next=()=>{
    var a=document.querySelectorAll('.price_shock')
    console.log(a)

    for(var i=0;i<=5;i++){
      a[(nextproduct+i)%12].style.display="none"
      a[(nextproduct+6+i)%12].style.display="block"
    }
    setnextproduct((nextproduct+6)%12)
    console.log(nextproduct)
  }
    return <div class="promotion">
    <div class="promotion_top">
      <div class="promotion_title">
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"/>
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"/>
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"/>
      </div>
      <div class="count_time">
        <span>00</span>:
        <span>00</span>:
        <span>00</span>
        <img src="https://salt.tikicdn.com/ts/upload/93/23/bf/1a8d8d0978740faf58eba5f419507de3.png"/>
      </div>
    </div>
    <div class="price_shocks d-flex justify-content-center mt-50 mb-50">
      <div class="row price_shock_1">
      {product?.map((item,index)=>{
        if(index<12){
        return <a class="price_shock col col-sm-2" href="">
                <img src={item.Img}/>
                <a class="price_percent" href="">
                  <p class="price_d">{item.Price} đ</p>
                  <p class="percent_reduction">-28%</p>
                </a>
                <div class="sold" >
                  <div style={{width:'60%'}}></div>
                  <span >đã bán 20</span>
                  <img src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"/>
                </div>
               </a>
      }})}

      </div>
      <a onClick={next} class="icon_price_shock"><img src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"/></a>
      
    </div>
  </div>
    
}