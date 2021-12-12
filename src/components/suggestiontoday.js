import './suggestiontoday.css'
import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,NavLink,Prompt,Switch, useHistory,Link} from 'react-router-dom'
import axios from 'axios'
export default function Suggestiontoday() {
	const [product,setproduct]=useState()
	useEffect(async() => {
    await axios({
      method: 'get',
      url: 'http://localhost:3000/products/listproduct',
    }).then(res=>{
        setproduct(res.data)
    }).catch(err=>{
        console.log(err)
    })
    
  },[]);
	window.addEventListener('scroll', (event) => {
		var a=document.querySelector('.suggestion_fixed')
		var scroll=window.scrollY
		if(scroll>2658){
			if(a){
				a.style.position="fixed"
				a.style.top="0px"
				a.style.width="94.1%"
				a.style.paddingBottom="5px"
			}
		}
		if(scroll<=2658 || scroll>3450){
			if(a){
				a.style.position="relative"
				a.style.width="100%"
				a.style.paddingBottom="0px"
			}
		}
    })
	return <div class="suggestion_today">
		<div class="suggestion_fixed"><div class="suggestion_title">
			<h5>Gợi Ý Hôm Nay</h5>
		</div>
		<div class="suggestion_header">
			<div class="suggestion_header_item">
				<div class="suggestion_header_item_1">
					<img src="https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp"/>
					<p>Dành Cho Bạn</p>
				</div>
			</div>
			<div class="suggestion_header_item">
				<div class="suggestion_header_item_1">
					<img src="https://salt.tikicdn.com/cache/w100/ts/tikimsp/65/22/b3/cc7e531e7025d04f35615383255f97fc.png.webp"/>
					<p>Mua 1 Tặng 1</p>
				</div>
			</div>
			<div class="suggestion_header_item">
				<div class="suggestion_header_item_1">
					<img src="https://salt.tikicdn.com/cache/w100/ts/tikimsp/e7/8e/3d/fa2cde2a26135c02279dbe752a9950aa.png.webp"/>
					<p>Mua 1 tặng 1</p>
				</div>
			</div>
			<div class="suggestion_header_item">
				<div class="suggestion_header_item_1">
					<img src="https://salt.tikicdn.com/cache/w100/ts/personalish/41/99/9a/8898607d7fca4b79775a708c57a8152f.png.webp"/>
					<p>Deal Siêu Hot</p>
				</div>
			</div>
			<div class="suggestion_header_item">
				<div class="suggestion_header_item_1">
					<img src="https://salt.tikicdn.com/cache/w100/ts/personalish/0f/59/9d/215fa18ef72e430eefcbfe5355cab8e2.png.webp"/>
					<p>Rẻ Vô Đối</p>
				</div>
			</div>
			<div class="suggestion_header_item">
				<div class="suggestion_header_item_1">
					<img src="https://salt.tikicdn.com/cache/w100/ts/personalish/2c/25/8d/16f4e3834461f44d14b11cdd8a0ce918.png.webp"/>
					<p>Đi Chợ Siêu Sale</p>
				</div>
			</div>
			<div class="suggestion_header_item">
				<div class="suggestion_header_item_1">
					<img src="https://salt.tikicdn.com/cache/w100/ts/personalish/7d/8a/6e/d8b76e2c43cbd06b7e1aa3ab8c54df64.png.webp"/>
					<p>Hàng Mới</p>
				</div>
			</div>
			<div class="suggestion_header_item">
				<div class="suggestion_header_item_1">
					<img src="https://salt.tikicdn.com/cache/w100/ts/personalish/dc/f1/b1/6ba9e529785de3ad1a81b9c569d05aa0.png.webp"/>
					<p>Xu Hướng Thời Trang</p>
				</div>
			</div>
		</div>
		</div>
		<div class="suggestion_list">
			<div class="suggestion_list_item">
				<a href="" class="suggestion_list_item_1">
					<img src="https://salt.tikicdn.com/cache/200x200/ts/product/7f/53/ec/ef2d8bbd2104671b859067d27ef00bbd.jpg.webp"/>
					<p class="suggestion_list_name">hộp khẩu trang 10 cái VNV95,có bông kháng khuẩn</p>
					<div class="suggestion_list_evaluate">
						<i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i>
						<p>đã bán 1000+</p>
					</div>
					<div>
						<p class="suggestion_list_price">29.000 đ</p>
						<p class="suggestion_list_reduce">-36%</p>
					</div>
				</a>
			</div>
			
			{product?.map((item,index)=>{
				if(index<17){
					return <div class="suggestion_list_item">
				<a href="" class="suggestion_list_item_1">
					<img src={item.Img}/>
					<p class="suggestion_list_name">{item.ProductName}</p>
					<div class="suggestion_list_evaluate">
						<i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i>
						<p>đã bán 1000+</p>
					</div>
					<div>
						<p class="suggestion_list_price">{item.Price}</p>
						<p class="suggestion_list_reduce">-36%</p>
					</div>
				</a>
			</div>
				}
			})}
		</div>
		<div class="suggestion_seemore"><a href="">Xem Thêm</a></div>
	</div>
}