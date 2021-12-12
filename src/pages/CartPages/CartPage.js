import {useState,useEffect} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { orther } from './../../redux/redux'
import { ortherInformation } from './../../redux/redux'
import './Cart.css'
export default function CartPage(){
  // const orthers= useSelector(orther)
  const history =useHistory()
  const other=useSelector(orther)
  const [quantity,setquantity]=useState(new Array(other?.length).fill(1))
  const quantityReduce=(index)=>{
    // setquantity({[0]:5})
    var a=document.querySelectorAll(".cart_quantity_input")
    console.log(quantity)
  }
  const quantityAdd=()=>{
    setquantity(quantity+1)
  }
  var orthers=history.location.state
    return <div class="cart_free">
    <div class="cart_free_shipping">
      <div >
        <p>Miễn phí vận chuyển đơn từ 149K của mỗi nhà bán có logo</p>
        <img src="https://salt.tikicdn.com/ts/upload/3d/e3/de/2c71b5485f7335d41cb3c06198035fe3.png"/>
        <i class="fas fa-info-circle"></i>
      </div>
    </div>
    <h5>GIỎ HÀNG</h5>
    <div class="cart_all">
      <div class="cart_list">
        <div class="cart_list_header">
          <input type="checkbox" name=""/>
          <a class="col-sm-6" href="">Tất cả (2 sản phẩm)</a>
          <p class="cart_price col-sm-1">Đơn giá</p>
          <p class="cart_quantity col-sm-1">Số lượng</p>
          <p class="cart_sum_price col-sm-2">Thành tiền</p>
          <img src="  https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"/>
        </div>
        <div class="cart_item">
          <div class="cart_item_1">
            <input type="checkbox" name=""/>
            <img src="https://salt.tikicdn.com/ts/upload/30/24/79/8317b36e87e7c0920e33de0ab5c21b62.png"/>
            <a href="">Gu Công Nghệ 24h</a>
            <img class="icon_right" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/Path.svg"/>
          </div>
          <div class="progress_bar_all">
          <div class="progress_bar">
            <div class="progress_bar_icon icon_1">
              <div class="icon_1_1">-30K</div>
              <div class="icon_1_2">149K</div>
            </div>
            <div class="progress_bar_icon icon_2">
              <div class="icon_1_1">-50K</div>
              <div class="icon_1_2">299K</div>
            </div>
          </div>
          <div class="progress_bar_img">
              <img src="https://salt.tikicdn.com/ts/upload/77/9a/0d/601353ce6c8255e009706cdae74d01de.png"/>
          </div>
          </div>
          <div class="cart_buy_more">
            <p>Để nhận Freeship 30K</p>
            <a href="">Mua thêm 149k</a>
          </div>
          
          {other?.map((item,index)=>{
        return <div class="cart_list_item">
            <div class="cart_list_item_check"><input class="cart_list_item_checkbox" type="checkbox" name=""/></div>
            <div class="cart_list_item_img"><img src={item[0]?.Img}/></div>
            <div class="col-sm-4"><a  href="">{item[0]?.ProductName}</a></div>
            <div class="col-sm-2"><p>{item[0]?.Price}đ</p></div>
            <div style={{position:"relative",right:"40px"}} class="detail_quatity cart_quantity_1 col-sm-2">
              <button  onClick={quantityReduce(index)}>-</button>
              <input class="cart_quantity_input" value={quantity[index]} type="text" name=""/>
              <button  onClick={quantityAdd}>+</button>
            </div>
            <div style={{position:"relative",right:"60px"}} class="col-sm-2"><p>{item[0]?.Price*quantity}</p></div>
            <div class="cart_delete"><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"/></div>
          </div>


            })}
        </div>
      </div>
      <div class="cart_right_all">
        <div class="cart_padding">
          <div class="cart_right">
            <p>Tiki Khuyến Mãi</p>
            <div class="cart_right_1">
              <p>Có thể chọn 2</p>
              <i class="fas fa-info-circle"></i>
            </div>
          </div>
          <div class="cart_right1">
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_icon.svg"/>
            <a href="">Chọn hoặc nhập Khuyến mãi</a>
          </div>
        </div>
        <div class="cart_calculate">
          <div class="cart_calculate_1">
            <p>Tạm tính</p>
            <p>Giảm giá</p>
          </div>
          <div class="cart_calculate_2">
            <p>0đ</p>
            <p>0đ</p>
          </div>
        </div>
        <div class="cart_total">
          <p>
            Tổng cộng
          </p>
          <h6>Vui lòng chọn sản phẩm</h6>

        </div>
      </div>
    </div>
    </div>
  
}
 