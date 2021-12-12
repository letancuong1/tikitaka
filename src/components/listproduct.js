import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,NavLink,Prompt,Switch, useHistory,Link} from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {customers} from '../redux/redux'
import {detailsInformation} from '../redux/redux'
import Slide from './slide'
import Promotion from './promotion'
import HuntingSale from './huntingsale'
import Trademark from './trademark'
import Featurecategory from './featurecategory'
import Suggestiontody from './suggestiontoday'
import Footer from './footer'
export default function ListProduct(){
  const Customers= useSelector(customers)
  const history=useHistory()
  const [product,setproduct]=useState([])
  const dispatch=useDispatch()
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
  const addtoCart=async(id)=>{
    await axios({
      method: 'post',
      url: 'http://localhost:3000/products/orther',
      data:{
        productID:id,
        customersID:Customers._id,
        quantity:1,
      }
    }).then(res=>{
        alert(res.data)
    }).catch(err=>{
        console.log(err)
    })
  }
  const contents=product.map(item=>{
    return (<div  class="mt-2 col-lg-4 col-md-6 col-xl-3 col-6 kaa">
                  <div class="card">
                      <div class="card-body">
                          <div class="card-img-actions"> <img style={{height:"200px"}} src={item.Img} class="card-img img-fluid" alt=""/> </div>
                      </div>
                      <div class="card-body text-center details cart_display">
                          <div class="mb-2">
                              <h6 style={{height:'60px'}} class="font-weight-semibold mb-2"> <Link to={{pathname:`/${item._id}/details`,state:item}} class="color_model text-default mb-2" data-abc="true">{item.ProductName}</Link> </h6> 

                          </div>
                          <h3 class="color_model mb-0 font-weight-semibold price">{item.Price}</h3>
                          <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
                  
                          <button onClick={()=>addtoCart(item._id)} type="button" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> Thêm vào giỏ hàng</button>
  
                      </div>
                  </div>
              </div> )
            })
  return <div>
    <Slide/>
    <Promotion/>
    <HuntingSale/>
    <Trademark/>
    <Featurecategory/>
    <Suggestiontody/>
    <Footer/>
    <div class="container" style={{position:'relative',top:'100px'}}>
    <div  class="d-flex justify-content-center mt-50 mb-50">
    <div class="row">
    {contents}
    </div>
    </div>
  </div>
  </div>
    
  
}