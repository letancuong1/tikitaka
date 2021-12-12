import {useHistory,Link} from 'react-router-dom'
import axios from 'axios'
import {useState,useEffect} from 'react'
import './category.css'
export default function ProductCategory() {
	const [nexslide,setnextslide]=useState(998.5)
	const [product,setproduct]=useState()
	const [listproduct,setlistproduct]=useState()
	const [listproduct1,setlistproduct1]=useState()
	const [sortprice,setsortprice]=useState()
	const [sortprice1,setsortprice1]=useState()
	const [sortprice3,setsortprice3]=useState()
	useEffect(()=>{
		var a=document.querySelectorAll('.category_slide_1')
		var c=998.5 
		setInterval(()=>{
	    for(var i=0;i<a.length;i++){
			a[i].style.transform = `translateX(-${c}px)`;
		}
		c=((c+998.5)%(a.length*998.5))
    	},8000)
	},[])
	useEffect(async() => {
	var product1=null
    await axios({
      method: 'post',
      url: 'http://localhost:3000/product-category/list',
      data:{
      	category:history.location.state.name1
      }
    }).then(res=>{
        setproduct(res.data)
        product1=res.data
    }).catch(err=>{
        console.log(err)
    })

    await axios({
      method: 'post',
      url: 'http://localhost:3000/product-category/product',
      data:[product1]
    }).then(res=>{
        // console.log(res.data)
        // setlistproduct(res.data)
        var x=[]
        res.data.map(item=>{
        	for(var i=0;i<item.length;i++){
        		x.push(item[i])
        	}
        })
        setlistproduct(x)
        setlistproduct1(x)
        setsortprice3(x)
    }).catch(err=>{
        console.log(err)
    })
    
  },[]);
	
	const nextSlideRight=(e)=>{
		 e.preventDefault()
		var a=document.querySelectorAll('.category_slide_1')
		for(var i=0;i<a.length;i++){
			a[i].style.transform = `translateX(-${nexslide}px)`;
		}
		setnextslide((nexslide+998.5)%(a.length*998.5))
	}
	const nextSlideLeft=(e)=>{
		 e.preventDefault()
		var a=document.querySelectorAll('.category_slide_1')
		setnextslide((nexslide+998.5*(a.length-1))%(a.length*998.5))
		for(var i=0;i<a.length;i++){
			a[i].style.transform = `translateX(-${(nexslide+998.5*2)%(a.length*998.5)}px)`;
		}
		
	}
	const CategorySort=(e,id)=>{
		e.preventDefault()
		var c=[]
		listproduct1.map(item=>{
			if(item.CategoryID==id){
				c.push(item)
			}
		})
		setlistproduct(c)
		setsortprice3(c)

	}
	const sortpriceto=async(e)=>{
		e.preventDefault()
		var d=[]
		var e=[]
		await sortprice3.map(item1=>{
			if(Number(sortprice1)>item1.Price){
				d.push(item1)
			}
		})
		d.map(item2=>{
			if(Number(sortprice)<item2.Price){
				e.push(item2)
			}
		})
		setlistproduct(e)
	}
	const history=useHistory()
	var category=history.location.state
	return <div class="category_product">
		<div class="category_header">
			<Link to="/" >Trang Chủ</Link>
			<div><i class="fas fa-chevron-right"></i></div>
			<p>{category.name2}</p>
		</div>
		<div class="category_list">
			<div class="category_menu">
				<div class="category_menu_1">
					<h6>DANH MỤC SẢN PHẨM</h6>
					{product?.map(item=>{
						return <div onClick={(e)=>CategorySort(e,item._id)}><a href="">{item.categoryname}</a></div>
					})}
				</div>
				<div class="delivery_adress">
					<div class="delivery_adress_1">
						<h6>ĐỊA CHỈ NHẬN HÀNG</h6>
						<p>Bạn muốn địa chỉ giao hàng ở đâu?</p>
						<a href="">NHẬP ĐỊA CHỈ</a>
					</div>
				</div>
				<div class="sevice">
					<div class="sevice_1">
						<h6>DỊCH VỤ</h6>
						<div>
							<input type="checkbox"/>
							<img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png"/>
							<a href="">Giao Hàng Siêu Tốc 24h</a>
						</div>
						<div>
							<input type="checkbox"/>
							<img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png"/>
							<a href="">Không Giới Hạn</a>
						</div>
						<div>
							<input type="checkbox"/>
							<a href="">Rẻ Hơn Hoàn Tiền</a>
						</div>
					</div>
				</div>
				<div class="category_evaluate">
					<h6>ĐÁNH GIÁ</h6>
					<a href="">
						<i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i><i class="fa fa-star star"></i>
						từ 5 sao
					</a>
					<a href="">
						<i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i>
						từ 4 sao
					</a>
					<a href="">
						<i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i>
						từ 3 sao
					</a>
				</div>
				<div class="category_price">
					<h6>GIÁ</h6>
					<div><a href="">Dưới 40.000</a></div>
				
					<div><a href="">Từ 40.000 đến 120.000</a></div>
				
					<div><a href="">Từ 120.000 đến 340.000</a></div>
					<p>chọn khoảng giá</p>
					<div class="category_price_input">
						<input onChange={e=>setsortprice(e.target.value)} value={sortprice} type="text" name=""/>
						<p>-</p>
						<input onChange={e=>setsortprice1(e.target.value)} value={sortprice1} type="text" name=""/>
					</div>
					<div class="category_price_apply">
						<a onClick={sortpriceto} href="">Áp Dụng</a>
					</div>
				</div>
				<div class="category_trademark">
					<h6>NHÀ CUNG CẤP</h6>
					<div>
						<input type="checkbox"/>
						<a href="">3 Sạch Food</a>
					</div>
					<div>
						<input type="checkbox"/>
						<a href="">CP</a>
					</div>
					<div>
						<input type="checkbox"/>
						<a href="">Cooky</a>
					</div>
					<div>
						<input type="checkbox"/>
						<a href="">Đảo Hải Sản</a>
					</div>
					<div>
						<input type="checkbox"/>
						<a href="">Đảo Hải Sản</a>
					</div>
				</div>
			</div>
			<div class="category_list_product">
				<div class="category_list_slide">
					<img class="category_slide_1" src="https://salt.tikicdn.com/cache/w1080/ts/banner/f7/64/6f/b081aec16493b3ed8e38904edb186723.jpg.webp"/>
					<img class="category_slide_1" src="https://salt.tikicdn.com/cache/w1080/ts/banner/0a/04/ba/cac50e041d50fb67a9a71057c9b52094.jpg.webp"/>
					<img class="category_slide_1" src="https://salt.tikicdn.com/cache/w1080/ts/banner/d4/a5/17/c4cb398570c75e1974cb0868757582bf.png.webp"/>
					<img class="category_slide_1" src="https://salt.tikicdn.com/cache/w1080/ts/banner/5a/1c/09/7f79e1a14d1edb98b8c43331381d59ea.jpg.webp"/>
					<a onClick={nextSlideRight} href="" class="category_slide_right" ><img src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"/></a>
					<a onClick={nextSlideLeft}  href="" class="category_slide_left" ><img src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"/></a>
				</div>
				<div class="category_list_classify">
					<a href="">Phổ Biến</a>
					<a href="">Bán Chạy</a>
					<a href="">Hàng Mới</a>
					<a href="">Giá Thấp</a>
					<a href="">Giá Cao</a>
				</div>
				<div class="category_ship">
					<img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png"/>
					<img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png"/>
				</div>
				<div class="category_list1">
					{listproduct?.map(item=>{
						return <div class="category_list_item1">
						<Link to={{pathname:`/${item._id}/details`,state:item}} class="category_list_item_1">
							<div class="category_list1_img">
								<img src={item.Img}/>
							</div>
							<div class="tiki_yummy">
								<img src="https://salt.tikicdn.com/ts/upload/df/89/23/e8d74188595960e2f00fb3ad005ad28c.png"/>
							</div>
							<p class="category_list_name">{item.ProductName.length>94?item.ProductName.substr(0,92)+"..":item.ProductName}</p>
							<div class="category_list_evaluate">
								<i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i>
								<p>đã bán 1000+</p>
							</div>
							<div>
								<p class="category_list_price">{item.Price}</p>
								<p class="category_list_reduce">-36%</p>
							</div>
						</Link>
					</div>
					})}
				</div>
			</div>
		</div>
	</div>
}