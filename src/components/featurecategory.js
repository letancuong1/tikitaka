import './featurecategory.css'
import axios from 'axios'
import {useEffect,useState} from 'react'
export default function Featurecategory() {
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
	return <div>
	<div class="feature_category">
		<div class="">
		<p class="header_feature">DANH MỤC NỔI BẬT</p>
		<div>
			{product?.map((item,index)=>{
			if(index<20){
				return <a href="">
						<img src="https://salt.tikicdn.com/cache/w100/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png.webp"/>
						<p>Thực phẩm tươi sống</p>
					</a>
			}
		})}
		</div>
		
		</div>
	</div>
		<div class="shopping_trends">
			<div class="shopping_trends_header">
				<div class="shopping_trends_header_title">
					<img src="https://salt.tikicdn.com/ts/upload/c7/ee/c2/d52a63b18732d5a77a9be29e7c3623a2.png"/>
					<h5>XU HƯỚNG MUA SẮM</h5>
				</div>
				<div class="shopping_trends_header_seemore">XEM THÊM</div>
			</div>
			<div class="shopping_trends_list">
				<div class="col-md-3 shopping_trends_item">
					<div class="shopping_trends_item_1">
					<div class="shopping_trends_item_2">
						<h5>Đèn bàn</h5>
						<p>Giảm Đến 37%</p>
						<img src="https://salt.tikicdn.com/cache/w100/ts/product/f2/ef/c3/c4550c28b3d108c973a07ebbbea93187.jpg.webp"/>
						<img src="https://salt.tikicdn.com/cache/w100/ts/product/f8/81/13/a4d5a255ad11f786bb903dceadfc17f7.jpg.webp"/>
					</div>
					</div>
				</div>
				<div class="col-md-3 shopping_trends_item">
					<div class="shopping_trends_item_1">
					<div class="shopping_trends_item_2">
						<h5>Đèn bàn</h5>
						<p>Giảm Đến 37%</p>
						<img src="https://salt.tikicdn.com/cache/w100/ts/product/f2/ef/c3/c4550c28b3d108c973a07ebbbea93187.jpg.webp"/>
						<img src="https://salt.tikicdn.com/cache/w100/ts/product/f8/81/13/a4d5a255ad11f786bb903dceadfc17f7.jpg.webp"/>
					</div>
					</div>
				</div>
				<div class="col-md-3 shopping_trends_item">
					<div class="shopping_trends_item_1">
					<div class="shopping_trends_item_2">
						<h5>Đèn bàn</h5>
						<p>Giảm Đến 37%</p>
						<img src="https://salt.tikicdn.com/cache/w100/ts/product/f2/ef/c3/c4550c28b3d108c973a07ebbbea93187.jpg.webp"/>
						<img src="https://salt.tikicdn.com/cache/w100/ts/product/f8/81/13/a4d5a255ad11f786bb903dceadfc17f7.jpg.webp"/>
					</div>
					</div>
				</div>
				<div class="col-md-3 shopping_trends_item">
					<div class="shopping_trends_item_1">
					<div class="shopping_trends_item_2">
						<h5>Đèn bàn</h5>
						<p>Giảm Đến 37%</p>
						<img src="https://salt.tikicdn.com/cache/w100/ts/product/f2/ef/c3/c4550c28b3d108c973a07ebbbea93187.jpg.webp"/>
						<img src="https://salt.tikicdn.com/cache/w100/ts/product/f8/81/13/a4d5a255ad11f786bb903dceadfc17f7.jpg.webp"/>
					</div>
					</div>
				</div>

			</div>
		</div>
		<div class="feature_2">
			<div class="col-md-4"><img src="https://salt.tikicdn.com/cache/w400/ts/banner/04/1d/da/8e05760442a7470aad183832f49d3388.png.webp"/></div>
			<div class="col-md-4"><img src="https://salt.tikicdn.com/cache/w400/ts/banner/04/1d/da/8e05760442a7470aad183832f49d3388.png.webp"/></div>
			<div class="col-md-4"><img src="https://salt.tikicdn.com/cache/w400/ts/banner/04/1d/da/8e05760442a7470aad183832f49d3388.png.webp"/></div>
		</div>
	</div>
}