import {useState,useEffect} from 'react';
import axios from 'axios'
import { useHistory ,Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import './slide.css'
export default function Slide(){
  const [stylecate,setstylecate]=useState(true)
  const [stylecate1,setstylecate1]=useState('block')
  const [i1,seti1]=useState(0)
  const slideList2=(e)=>{
    var i=i1
    seti1((i+2)%3)
    e.preventDefault()
    var img=document.querySelectorAll('.slide_phone_1');
    
    img[i].classList.remove(`active`)
    img[(i+2)%3].classList.add(`active`)

  }
  const slideList1=(e)=>{
    var i=i1
    seti1((i+1)%3)
    e.preventDefault()
    var img=document.querySelectorAll('.slide_phone_1');
    img[i%3]?.classList.remove(`active`)
    
    img[(i+1)%3]?.classList.add(`active`)
    
    
  }
  useEffect(()=>{
    var img=document.querySelectorAll('.slide_phone_1');
    var i=0
    setInterval(()=>{
      img[i%3].classList.remove(`active`)
      img[(i+1)%3].classList.add(`active`)
      i=i+1
    },8000)
  },[])
  const category=()=>{
    setstylecate(!stylecate)
  }
    return <div>
    <div class="category">
    <div class="category_tiki">
      <Link to={{pathname:"/rau-cu-sach/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate?{display:'block'}:{display:'none'}} href="">Thịt,Rau Củ</Link>
      <Link to={{pathname:"/thiet-bi-so/category",state:{name1:"digitaldevice",name2:"Thiết Bị Số"}}} style={stylecate?{display:'block'}:{display:'none'}}> Thiết Bị Số</Link>
      <Link to={{pathname:"/nha-cua/category",state:{name1:"housedoor",name2:"Nhà Cửa"}}} style={stylecate?{display:'block'}:{display:'none'}}> Nhà Cửa</Link>
      <Link to={{pathname:"/bach-hoa/category",state:{name1:"tore",name2:"Bách Hóa"}}} style={stylecate?{display:'block'}:{display:'none'}}> Bách Hóa</Link>
      <Link to={{pathname:"/dien-thoai/category",state:{name1:"telephone",name2:"Điện Thoại"}}} style={stylecate?{display:'block'}:{display:'none'}}> Điện Thoại</Link>
      <Link to={{pathname:"/gia-dung/category",state:{name1:"tore",name2:"Gia Dụng"}}} style={stylecate?{display:'block'}:{display:'none'}}> Gia Dụng</Link>
      <Link to={{pathname:"/lam-dep/category",state:{name1:"beautiful",name2:"Làm Đẹp"}}} style={stylecate?{display:'block'}:{display:'none'}}> Làm Đẹp</Link>
      <Link to={{pathname:"/thoi-trang-nam/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate?{display:'block'}:{display:'none'}}> Thời Trang Nam</Link>
      <Link to={{pathname:"/giay-nu/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate?{display:'block'}:{display:'none'}}> Giày Nữ</Link>
      <Link to={{pathname:"/tui-nu/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate?{display:'block'}:{display:'none'}}>Túi Nữ</Link>
      <Link to={{pathname:"/giay-nam/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate?{display:'block'}:{display:'none'}}>Giày Nam</Link>
      <Link to={{pathname:"/me-va-be/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate?{display:'block'}:{display:'none'}}>Mẹ & Bé</Link>
      <Link to={{pathname:"/tui-nam/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate?{display:'block'}:{display:'none'}}>Túi Nam</Link>
      <Link to={{pathname:"/balo-vali/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate?{display:'block'}:{display:'none'}}>Balo & Vali</Link>
      <Link to={{pathname:"/phu-kien/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate==false?{display:'block'}:{display:'none'}}>Phụ Kiện</Link>
      <Link to={{pathname:"/dong-ho/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate==false?{display:'block'}:{display:'none'}} >Đồng Hồ</Link>
      <Link to={{pathname:"/laptop/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate==false?{display:'block'}:{display:'none'}} >Laptop</Link>
      <Link to={{pathname:"/quoc-te/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate==false?{display:'block'}:{display:'none'}} >Quốc tế</Link>
      <Link to={{pathname:"/voucher/category",state:{name1:"freshfood",name2:"Thịt,Rau Củ"}}} style={stylecate==false?{display:'block'}:{display:'none'}} >Voucher</Link>
      <a href="#" onClick={category}><img style={stylecate==false?{position:"absolute",left:"10px",transform: "rotateY(180deg)"}:{}} src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"/></a>
    </div>
    </div>
  <div class="slide">
  <div class="slide_tiki">   
    <div class="slide_phone">
      <div class="slide_phone_1 active" >
        <img class="sl1-2" src="https://salt.tikicdn.com/cache/w1080/ts/banner/47/d1/20/13435c4cbfd4bbedf3e2411bc14be23d.png.webp"/>
      </div>
      <div class="slide_phone_1 sl2" >
        <img class="sl2-img" src="https://salt.tikicdn.com/cache/w1080/ts/banner/5d/2d/1f/e30f2008b28ab5c98d6ad33596ab386f.png.webp"/>
      </div>
      <div class="slide_phone_1 sl3 " >
        <img class="sl3-img" src="https://salt.tikicdn.com/cache/w1080/ts/banner/29/04/83/45250f260918b1366d466a167de57353.png.webp"/>
      </div>
    </div>
    <div>
        <img onClick={slideList1} class="icon_slide ics_1" src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"/>
        <img onClick={slideList2} class="icon_slide ics_2" src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"/>
    </div>
    </div>
    <div class="slide_next">
      <img  src="https://salt.tikicdn.com/cache/w400/ts/banner/da/91/87/264a650725154d7e49d08b676600d14a.png.webp"/>
    </div>
    </div>
    </div>
}
