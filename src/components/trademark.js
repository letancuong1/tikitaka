import './trademark.css'
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Trademark() {
	const [nexslide,setnextslide]=useState(1260)
	const [product,setproduct]=useState()
	 const [nextproduct,setnextproduct]=useState(true)
	useEffect(()=>{
		var c=1260
		setInterval(()=>{
	      	var a=document.querySelectorAll('.genuine_item')
			for(var i=0;i<a.length;i++){
				a[i].style.transform = `translateX(-${c}px)`;
			}	
			c=(c+1260)%(a.length*1260)
    	},8000)
    	axios({
	      	method: 'get',
	      	url: 'http://localhost:3000/products/listproduct',
		}).then(res=>{
		    setproduct(res.data)
		}).catch(err=>{
		    console.log(err)
		})
	    // var a=document.querySelectorAll('.price_shock')
	    // for(var i=0;i>=6;i++){
	    // a[i].style.display="none"
	    // }
	},[])
	const nextSlideRight=(e)=>{
		 e.preventDefault()
		var a=document.querySelectorAll('.genuine_item')
		for(var i=0;i<a.length;i++){
			a[i].style.transform = `translateX(-${nexslide}px)`;
		}
		setnextslide((nexslide+1260)%(a.length*1260))
	}
	const nextSlideLeft=(e)=>{
		e.preventDefault()
		var a=document.querySelectorAll('.genuine_item')
		var x=nexslide
		if(x<=1260){
			setnextslide(1260*(a.length)-1260*2)
			for(var i=0;i<a.length;i++){
				a[i].style.transform = `translateX(-${1260*a.length-1260}px)`;
			}
		}else{
			setnextslide(x-1260)
			for(var i=0;i<a.length;i++){
				a[i].style.transform = `translateX(-${x}px)`;
			}
		}
		
		console.log(x)
	}
	const next1=()=>{
	    var a=document.querySelectorAll('.price_shock1')
	    if(nextproduct){
	    	for(var i=0;i<=11;i++){
		      a[i].style.transform = `translateX(-1260px)`;
		    }
	    }else{
	    	for(var i=0;i<=11;i++){
		      a[i].style.transform = `translateX(0px)`;
		    }
	    }
	    setnextproduct(!nextproduct)
	    console.log(nextproduct)
	  }
	return <div>
		<div class="free_ship">
			<div class="col-sm-3"><img src="https://salt.tikicdn.com/cache/w280/ts/banner/10/dd/88/07cdc705afdf6cfe772d06b954286030.png.webp"/></div>
			<div class="col-sm-3"><img src="https://salt.tikicdn.com/cache/w280/ts/banner/e2/43/2a/36413537abb718cbbac1d39da09d0b26.png.webp"/></div>
			<div class="col-sm-3"><img src="https://salt.tikicdn.com/cache/w280/ts/banner/17/4c/b4/1a680259c7092875f361c07faf860f30.png.webp"/></div>
			<div class="col-sm-3"><img src="https://salt.tikicdn.com/cache/w280/ts/banner/0c/da/b4/7af8042e9f10b384e7da1eee33c31986.png.webp"/></div>
		</div>
		<div class="genuine_brand">
			<div class="genuine_brand_title">
				<img src="https://salt.tikicdn.com/ts/upload/ab/97/b1/a7c6657740248d396b100bc2330e98b8.png"/>
				<h4>Thương Hiệu Chính Hãng</h4>
				<a href="">XEM THÊM</a>
			</div>
			<div class="genuine_brand_list">
				<div class="genuine_item">
					<div class="col-sm-6"><img src="https://salt.tikicdn.com/cache/w750/ts/banner/96/c5/5a/9d87190b2baffc845242db9e92d7ad73.png.webp"/></div>
					<div class="col-sm-6"><img src="https://salt.tikicdn.com/cache/w750/ts/banner/4f/ed/0c/62184f600539734e815d4a84f734799e.jpg.webp"/></div>
				</div>
				<div class="genuine_item">
					<div class="col-sm-6"><img src="https://salt.tikicdn.com/cache/w750/ts/banner/13/57/29/85df2961a877dd4557f57ec4bfa8ea73.png.webp"/></div>
					<div class="col-sm-6"><img src="https://salt.tikicdn.com/cache/w750/ts/banner/95/3d/98/beed9bbb15ced41a4b83178a5331e21e.png.webp"/></div>
				</div>
				<div class="genuine_item">
					<div class="col-sm-6"><img src="https://salt.tikicdn.com/cache/w750/ts/banner/18/d5/a4/a5276e10fc19a2d8a8e8411eba72c968.png.webp"/></div>
					<div class="col-sm-6"><img src="https://salt.tikicdn.com/cache/w750/ts/banner/41/a8/34/4cb2ab2887e5f9dee70653b1ffe99a43.png.webp"/></div>
				</div>
				<div class="genuine_item">
					<div class="col-sm-6"><img src="https://salt.tikicdn.com/cache/w750/ts/banner/96/c5/5a/0740a7855fb128035f4b713f64a7bc62.png.webp"/></div>
					<div class="col-sm-6"><img src="https://salt.tikicdn.com/cache/w750/ts/banner/4f/ed/0c/2693f14a05f27589852597b1abcb4e18.jpg.webp"/></div>
				</div>
				<div class="genuine_item">
					<div class="col-sm-6"><img src="https://salt.tikicdn.com/cache/w750/ts/banner/37/f1/13/a4b3e6eb1a9f9fb25c2b21b52fa89772.png.webp"/></div>
					<div class="col-sm-6"><img src="https://salt.tikicdn.com/cache/w750/ts/banner/5e/dd/e5/1ef07027bf25fb8b153e268eb517edc4.png.webp"/></div>
				</div>
				<a onClick={nextSlideRight} href="" class="genuine_click_to_right" ><img src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"/></a>
				<a onClick={nextSlideLeft} href="" class="genuine_click_to_left" ><img src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"/></a>
			</div>
			 <div class="price_shocks1 d-flex justify-content-center mt-50 mb-50">
		      <div class="row price_shock1_1">
		      {product?.map((item,index)=>{
		        if(index<12){
		        return <a class="price_shock1 col col-sm-2" href="">
		                <img src="https://salt.tikicdn.com/cache/w200/ts/banner/76/71/bc/6855729bb01f4a4809e35fc160ea3366.png.webp"/>
		                <p>Ưu Đãi Nửa Giá</p>
		               </a>
		      }})}

		      </div>
		      <a onClick={next1} class="icon_price_shock1"><i class="fas fa-chevron-right"></i></a>
		    </div>
		</div>
		
	</div>
}
// <img src={item.Img}/>
// 		                <a class="price_percent1" href="">
// 		                  <p class="price_d1">ưu đãi nửa giá</p>
// 		                </a>