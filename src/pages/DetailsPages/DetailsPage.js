import {useState,useEffect} from 'react';
import axios from 'axios'
import { useHistory,Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { AddortherInformation } from './../../redux/redux'
import { customers } from './../../redux/redux'
import React from 'react'
import './Details.css'
export default function DetailsPage(){
  const [commentinput,setcommentinput]=useState(false)
  const [check,setcheck]=useState(true)
  const [Quantity,setQuantity]=useState(1)
  const [Seller,setSeller]=useState()
  const [category,setcategory]=useState()
  const [similar,setsimilar]=useState()
  const [Img,setImg]=useState('')
  const Customers= useSelector(customers)
  const dispatch=useDispatch()
  const history=useHistory()
  const [styleDescription,setstyleDescription]=useState(true)
  const [nextproduct,setnextproduct]=useState(true)
  const [commentText,setcommentText]=useState()
  const [showcomment,setshowcomment]=useState()

  const [customercomment,setcustomercomment]=useState()

  const [imgBase64,setimgBase64]=useState([])

  const [pagecomment,setpagecomment]=useState(0)
  const clickComment=()=>{
    setcommentinput(true)
  }
  const BlurComment=()=>{
    setcommentinput(false)
  }
  useEffect(async() => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/products/sellerdemo',
      data:{
        id:history.location.state?.SellerID
      }
    }).then(res=>{
        setSeller(res.data)
        
    }).catch(err=>{
        console.log(err)
    })
    axios({
      method: 'post',
      url: 'http://localhost:3000/product-category/list1',
      data:{
        id:history.location.state?.CategoryID
      }
    }).then(res=>{
        setcategory(res.data)
    }).catch(err=>{
        console.log(err)
    })
    axios({
      method: 'post',
      url: 'http://localhost:3000/product-category/similar',
      data:{
        id:history.location.state?.CategoryID
      }
    }).then(res=>{
        setsimilar(res.data)
    }).catch(err=>{
        console.log(err)
    })

    var customerID=[]
    await axios({
      method: 'post',
      url: 'http://localhost:3000/products/showcomment',
      data:{
        productID:history.location.state._id,
      }
    }).then(res=>{
        setshowcomment(res.data)
        res.data.map(item=>{
          customerID.push(item.customerID)
        })
    }).catch(err=>{
        console.log(err)
    })
    await axios({
      method: 'post',
      url: 'http://localhost:3000/products/showcustomer',
      data:{
        customerID:customerID,
      }
    }).then(res=>{
        setcustomercomment(res.data)
    }).catch(err=>{
        console.log(err)
    })
    
  }, []);
  const comment=async()=>{
    await axios({
      method: 'post',
      url: 'http://localhost:3000/products/comment',
      data:{
        productID:history.location.state._id,
        customerID:Customers._id,
        commentText:commentText,
        commentImg:imgBase64
      }
    }).then(res=>{
        console.log('tr??? v???',res.data)
        setcommentText("")
    }).catch(err=>{
        console.log(err)
    })
    setcustomercomment(prev=>[...prev,Customers])
    setshowcomment(prev=>[...prev,{
      commentText:commentText,
      commentImg:imgBase64
    }])
  }
  const AddToCart=(e)=>{
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:3000/products/orther',
      data:{
        productID:history.location.state._id,
        customersID:Customers._id,
        quantity:Quantity,
      }
    }).then(res=>{
        alert(res.data)
        if(res.data=='th??m v??o gi??? h??ng th??nh c??ng'){
          dispatch(AddortherInformation([history.location.state]))
        }
    }).catch(err=>{
        console.log(err)
    })

    
  }
  const quantityReduce=()=>{
    if(Quantity>1){
      setQuantity(Quantity-1)
    }
  }
  const quantityAdd=()=>{
    setQuantity(Quantity+1)
  }
  const checkbox=()=>{
    setcheck(!check)
  }
  const next1=()=>{
      var a=document.querySelectorAll('.suggestion_list1_item')
      if(nextproduct){
        for(var i=0;i<=11;i++){
          if(a[i]){
            a[i].style.transform = `translateX(-1269px)`;
          }
        }
      }else{
        for(var i=0;i<=11;i++){
          if(a[i]){
            a[i].style.transform = `translateX(0px)`;
          }
        }
      }
      setnextproduct(!nextproduct)
    }
  const seemore=(e)=>{
    e.preventDefault()
    setstyleDescription(!styleDescription)
  }
  const onchangeImg=(e,img)=>{
    e.preventDefault()
    var a=document.querySelector(".img123")
    a.src=img
    console.log(a)
  }
  const productsame=(e,item)=>{
    e.preventDefault()
    history.push({
      pathname:`/${item._id}/details`,
      state:item
    })
    UseE()
    window.scrollTo(0, 0);
  }
  const UseE=async()=>{
    axios({
      method: 'post',
      url: 'http://localhost:3000/products/sellerdemo',
      data:{
        id:history.location.state?.SellerID
      }
    }).then(res=>{
        setSeller(res.data)
        
    }).catch(err=>{
        console.log(err)
    })
    axios({
      method: 'post',
      url: 'http://localhost:3000/product-category/list1',
      data:{
        id:history.location.state?.CategoryID
      }
    }).then(res=>{
        setcategory(res.data)
    }).catch(err=>{
        console.log(err)
    })
    axios({
      method: 'post',
      url: 'http://localhost:3000/product-category/similar',
      data:{
        id:history.location.state?.CategoryID
      }
    }).then(res=>{
        setsimilar(res.data)
    }).catch(err=>{
        console.log(err)
    })
    var customerID=[]
    await axios({
      method: 'post',
      url: 'http://localhost:3000/products/showcomment',
      data:{
        productID:history.location.state._id,
      }
    }).then(res=>{
        setshowcomment(res.data)
        res.data.map(item=>{
          customerID.push(item.customerID)
        })
    }).catch(err=>{
        console.log(err)
    })
    await axios({
      method: 'post',
      url: 'http://localhost:3000/products/showcustomer',
      data:{
        customerID:customerID,
      }
    }).then(res=>{
        setcustomercomment(res.data)
    }).catch(err=>{
        console.log(err)
    })
  }
  const changeImg=async(e)=>{
    var file=(e.target.files[0])
    var filebase64=await converBase64(file)
    await setimgBase64(prev=>[...prev,filebase64])
    await console.log(imgBase64)
  }
  const converBase64=(file)=>{
    return new Promise((res,rej)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
        res(fileReader.result);
      };
      fileReader.onerror=(err)=>{
        rej(err)
      }
    })

  }
  var a=history.location.state
    return <div class="detail">
       <div class="detail_title">
          <Link to="/">Trang Ch???</Link>
          <div><i class="fas fa-chevron-right"></i></div>
          <Link to={{pathname:`/${category?category[0].categoryparent:''}/category`,state:{name1:category?category[0].categoryparent:'',name2:category?category[0].categoryparent:''}}}>{category?category[0].categoryparent:''}</Link>
          <div><i class="fas fa-chevron-right"></i></div>
           <Link to="/">{category?category[0].categoryname:''}</Link>
          <div><i class="fas fa-chevron-right"></i></div>
          <p>{a.ProductName.length>100?a.ProductName.substr(0,100)+"..":a.ProductName}</p>
       </div>
       <div class="detail_buy">
         <div class="detail_img">
           <div>
             <img class="detail_img_1 img123" src={a.Img}/>
             <div class="detail_img_2">
               <img onClick={(e)=>onchangeImg(e,a.Img)} src={a.Img}/>
               <img onClick={(e)=>onchangeImg(e,a.Img1)} src={a.Img1}/>
               <img onClick={(e)=>onchangeImg(e,a.Img2)} src={a.Img2}/>
               <img onClick={(e)=>onchangeImg(e,a.Img3)} src={a.Img3}/>
               <img onClick={(e)=>onchangeImg(e,a.Img4)} src={a.Img4}/>
               <img onClick={(e)=>onchangeImg(e,a.Img2)} src={a.Img2}/>
             </div>
             <div class="detail_share">
               <div><p>Chia s???:</p></div>
               <div><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-facebook.svg"/></div>
               <div><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-messenger.svg"/></div>
               <div><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-pinterest.svg"/></div>
               <div><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-twitter.svg"/></div>
               <div><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-copy.svg"/></div>
               <div class="detail_like">
                 <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-like.svg"/>
                 <a href="">Th??ch</a>
               </div>
             </div>
           </div>
         </div>
         <div class="detail_right">
           <div class="detail_right_1">
              <div class="detail_right_header">
                <p>Th????ng Hi???u:</p>
                <a class="detail_trademark" href="">{a.Trademark}</a>
                <p>?????ng th??? 20 trong </p>
                <a href="">Top 1000 s???n ph???m b??n ch???y th??ng n??y</a>
              </div>
              <div class="detail_name_product">
                <h1>{a.ProductName}</h1>
              </div>
              <div class="detail_evaluate">
                <div class="detail_evaluate_1"><i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i><i class="fa fa-star star"></i></div>
                <a class="detail_evaluate_1 " href="">(Xem 170 ????nh gi??)</a>
                <p class="detail_evaluate_1">???? B??n 385</p>
              </div>
              <div class="detail_main">
                <div class="detail_main_1">
                  <div class="detail_main_1_price">
                    <div class="detail_main_1_price_1">{a.Pricereduce} ???</div>
                    <div class="detail_main_1_price_2">{a.Price} ???</div>
                    <div class="detail_main_1_price_3">{parseFloat(((a.Price/a.Pricereduce)-1)*100).toFixed(1)}%</div>
                  </div>
                  <div class="detail_main_2_price">
                    <img src="https://salt.tikicdn.com/ts/upload/7b/17/f7/4860983e93ea3c264ae0d932c58ec4f7.png"/>
                    <a href="">Ho??n ti???n 15%, mi???n ph?? ph?? th?????ng ni??n</a>
                  </div>
                  <div class="detail_main_3_price">
                    <img src="https://salt.tikicdn.com/ts/upload/21/b3/00/bab4964906fcb6c56d57d9d69a6b2995.png"/>
                    <a href="">Mi???n Ph?? V???n Chuy???n</a>
                  </div>
                  <div class="detail_color">
                    <p>M??u:</p>
                    <h6>V??ng</h6>
                  </div>
                  <div class="detail_color_1">
                    <img class="img1" src="https://salt.tikicdn.com/cache/100x100/media/catalog/producttmp/ee/75/95/ec2668a50da21a9e138ee999bd22d7ab.jpg.webp"/>
                    <p>V??ng</p>
                    <img class="img2" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"/>
                  </div>
                  <div class="detail_discount_code">
                    <h6>6 m?? gi???m gi??</h6>
                    <div>
                      <a href="">gi???m 25k</a>
                      <a href="">gi???m 25k</a>
                      <a href="">gi???m 25k</a>
                    </div>
                  </div>
                  <div>
                    <div class="device_bundled">
                      <h6>D???ch V??? Mua K??m</h6>
                      <div class="device_bundled_1">
                        <img onClick={checkbox} class="device_bundled_check" style={check==true?{display:"block"}:{display:"none"}} src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/enabled_off.svg"/>
                        <img onClick={checkbox} class="device_bundled_check" style={check==false?{display:"block"}:{display:"none"}} src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/enabled_on.svg"/>
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/af/ff/43/7186184ff3e311b562de02ea7fef3e1e.jpg"/>
                        <div>
                          <p>D???ch v??? b???o v??? ??i???n tho???i, m??y t??nh b???ng - r??i, v???, v??o n?????c</p>
                          <h6>2.399.000 ???</h6>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="detail_quantity_buy">
                      <p>S??? L?????ng</p>
                      <div class="detail_quatity">
                        <button onClick={quantityReduce}><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"/></button>
                        <input value={Quantity} type="text" name=""/>
                        <button onClick={quantityAdd}><img src="  https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"/></button>
                      </div> 
                      <div class="detail_buy">
                        <button onClick={AddToCart} class="detail_buy_1">Ch???n Mua</button>
                        <button class="detail_buy_2">
                          <h6>Tr??? G??p Qua Th??? T??n D???ng</h6>
                          <p>Ch??? t??? 3.082.000 ??/th??ng</p>
                        </button>
                      </div>                   
                  </div>
                </div>
                <div class="detail_main_2">
                   <div class="detail_seller">
                     <img class="detail_seller_logo" src={Seller?.imgseller}/>
                     <div class="chinh_hang">
                       <Link  to={{pathname:`/${Seller?.nameseller}/sellerdetail`,state:Seller}}>{Seller?.nameseller}</Link>
                       <img src="https://salt.tikicdn.com/cache/w100/ts/upload/ca/69/d7/5b7e632a99b1400a9c31226da9ea125b.png.webp"/>
                     </div>
                   </div>
                   <div class="detail_quatity_evaluate">
                     <h6>4.6 / 5</h6>
                     <i class="fa fa-star star"/>
                     <h6 class="detail_quatity_evaluate_1">325k+</h6>
                   </div>
                   <div class="detail_quatity_evaluate_small">
                     <small>3.3tr+</small>
                     <small class="small2">Theo d??i</small>
                   </div>
                   <div class="detail_watch_follow">
                     <Link  to={{pathname:`/${Seller?.nameseller}/sellerdetail`,state:Seller}}class="detail_watch_shop">
                       <img src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png"/>
                       <p>Xem Shop</p>
                     </Link>
                     <button class="detail_follow">
                       <img src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png"/>
                       <p>Theo D??i</p>
                     </button>
                   </div>
                   <div class="detail_insurance">
                     <div>
                        <p class="detail_insurance_2">Th???i gian b???o h??nh</p>
                        <p class="detail_insurance_1">12 th??ng</p>
                     </div>
                     <div>
                       <p class="detail_insurance_2">H??nh th???c b???o h??nh</p>
                       <p class="detail_insurance_1">??i???n t???</p>
                     </div>
                     <div>
                       <p class="detail_insurance_2">N??i b???o h??nh</p>
                       <p class="detail_insurance_1">B???o h??nh ch??nh h???ng</p>
                     </div>
                     <div>
                       <p class="detail_insurance_2">H?????ng d???n b???o h??nh</p>
                       <a href="" class="detail_insurance_1">Xem chi ti???t</a>
                     </div>
                   </div>
                   <div class="detail_trust">
                     <div>
                       <img src="https://salt.tikicdn.com/ts/upload/2c/48/44/720434869e103b03aaaf1a104d91ad25.png"/>
                       <img src="https://salt.tikicdn.com/ts/upload/4b/a1/23/1606089d5423e5cba05e3820ad39708e.png"/>
                       <img src="https://salt.tikicdn.com/ts/upload/63/75/6a/144ada409519d72e2978ad2c61bc02a7.png"/>
                     </div>
                     <div>
                       <p>Ho??n ti???n</p>
                       <p>M??? h???p</p>
                       <p>?????i tr??? trong</p>
                     </div >
                      <div class="detail_trust_1">
                       <p>111%</p>
                       <p>ki???m tra</p>
                       <p>7 ng??y</p>
                     </div>
                      <div class="detail_trust_2">
                       <p>N???u h??ng gia</p>
                       <p>Nh???n h??ng</p>
                       <p>n???u sp l???i</p>
                     </div>
                   </div>
                   <div class="detail_compare">
                     <div>
                       <h6>1 nh?? b??n h??ng kh??c</h6>
                       <p>Gi?? t??? 36.789.000 ???</p>
                     </div>
                    <button>So s??nh</button>
                 </div>
                 </div>

              </div>
           </div>
          
         </div>
       </div>
       <div class="detail_same">
       <h4>S???n ph???m t????ng t???</h4>
          <div class="suggestion_list same">
             {similar?.map(item=>{
              return <div class="suggestion_list1_item">
                    <Link onClick={e=>productsame(e,item)} class="suggestion_list_item_1">
                      <img src={item.Img}/>
                      <p class="suggestion_list_name">{item.ProductName.length>94?item.ProductName.substr(0,92)+"..":item.ProductName}</p>
                      <div class="suggestion_list_evaluate">
                        <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i>
                        <p>???? b??n 1000+</p>
                      </div>
                      <div>
                        <p class="suggestion_list_price">{item.Price} ??</p>
                        <p class="suggestion_list_reduce">{parseFloat(((item.Price/item.Pricereduce)-1)*100).toFixed(1)}%</p>
                      </div>
                    </Link>
                  </div>
             })}
            <a onClick={next1} class="icon_price_shock1"><i class="fas fa-chevron-right"></i></a>
          </div>
       </div>
       <div class="detail_infomation">
          <h5>Th??ng Tin Chi Ti???t</h5>
          <div class="detail_infomation1">
            
            <div class="detail_infomation_header" dangerouslySetInnerHTML={{__html: a.ParameterHeader}}></div>
            <div class="detail_infomation_content" dangerouslySetInnerHTML={{__html: a.ParameterContent}}>
            </div>
          </div>
        </div>
       <div style={styleDescription?{height:"450px"}:{}} class="detail_description">
          <div class="detail_description1" dangerouslySetInnerHTML={{__html: a.Description}}></div>
          <div style={styleDescription==false?{display:"none"}:{}}class="gradient"></div>
        </div>
         <div class="detail_seemore"><a onClick={seemore} href="" >{styleDescription?"Xem Th??m":"Thu G???n"}</a></div>
         <div class="comment_review">
           <h5>????nh Gi?? - Nh???n X??t T??? Kh??ch H??ng</h5>
           <div class="comment_review_1">
             <div class="comment_header">
               <div class="comment_header_1">
                 <h3>4.2</h3>
                 <div class="comment_header_1_1">
                   <div><i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i></div>
                   <p>24 nh???n x??t</p>
                 </div>
               </div>
               <div class="comment_header_2">
                 <div class="comment_header_2_1">
                   <div>
                     <i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i>
                   </div>
                   <div>
                     <i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i>
                   </div>
                   <div>
                     <i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i>
                   </div>
                   <div>
                     <i class="fa fa-star star"></i><i class="fa fa-star star"></i>
                   </div>
                   <div>
                     <i class="fa fa-star star"></i>
                   </div>
                 </div>
                 <div class="comment_header_2_2">
                   <div class="comment_header_2_21"><div></div></div>
                   <div class="comment_header_2_21"><div></div></div>
                   <div class="comment_header_2_21"><div></div></div>
                   <div class="comment_header_2_21"><div></div></div>
                   <div class="comment_header_2_21"><div></div></div>
                 </div>
               </div>
             </div>
             <div class="comment_content">
               <h6>T???t c??? h??nh ???nh (3)</h6>
               <div class="comment_img">
                 <img src=" https://salt.tikicdn.com/cache/w120/ts/review/f9/fd/14/3ad8a046ada5c90a8c03fdd545c98271.jpg"/>
                 <img src=" https://salt.tikicdn.com/cache/w120/ts/review/f9/3c/cd/6eaa30d4208984ce6483890678da5e9a.jpg"/>
                 <img src=" https://salt.tikicdn.com/cache/w120/ts/review/1a/5d/ae/f5bb83a84fa3fd2c7fc6348ee12fc3bf.jpg"/>
               </div>
               <div class="comment_content_1">
                 <p>L???c xem theo:</p>
                 <h6>M???i nh???t</h6>
                 <h6>C?? h??nh ???nh</h6>
                 <h6>???? mua h??ng</h6>
                 <h6>5<i class="fa fa-star star"></i></h6>
                 <h6>4<i class="fa fa-star star"></i></h6>
                 <h6>3<i class="fa fa-star star"></i></h6>
                 <h6>2<i class="fa fa-star star"></i></h6>
                 <h6>1<i class="fa fa-star star"></i></h6>
               </div>
             </div>
           </div>
           <div class="comment_review_2">
             <div class="comment_header2_1">
               <div class="comment_customer">
                 <div class="comment_customer_1">
                    <img src=" https://tiki.vn/assets/img/avatar.png"/>
                    <span>VT</span>
                 </div>
                 <div class="comment_customer_2">
                   <h5>H?? V??n Th???nh</h5>
                   <p>???? tham gia 4 n??m</p>
                 </div>
               </div>
               <div class="comment_customer1">
                 <img src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png"/>
                 <p>???? vi???t:</p>
                 <p>8 ????nh gi??</p>
               </div>
               <div class="comment_customer1">
                 <img src="https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"/>
                 <p>???? nh???n:</p>
                 <p>23 L?????t c???m ??n</p>
               </div>
             </div>
             <div class="comment_customer_content">
               <div class="comment_customer_content_1">
                 <i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i>
                 <h6>B??nh th?????ng</h6>
               </div>
               <div class="comment_customer_content_2">
                 <span></span>
                 ???? mua h??ng
               </div>
               <div class="comment_customer_content_3">
                 <p>H??ng giao nhanh. D??ng kh?? ???n. Tuy nhi??n m???i ???????c 2 ng??y ???? h???ng ????n h??n 1 n???a</p>
               </div>
               <div class="comment_customer_content_4">
                 <img src="https://salt.tikicdn.com/ts/review/f9/3c/cd/6eaa30d4208984ce6483890678da5e9a.jpg"/>
                 <img src="https://salt.tikicdn.com/ts/review/f9/3c/cd/6eaa30d4208984ce6483890678da5e9a.jpg"/>
               </div>
               <div class="comment_customer_content_5">
                 <p>????nh gi?? v??o 3 th??ng tr?????c-???? d??ng 2 ng??y</p>
               </div>
               <div class="comment_customer_content_6">
                 <p>H???u ??ch (22)</p>
                 <p>B??nh lu???n</p>
               </div>
             </div>
           </div>
          
           {showcomment&&customercomment?.map((item,index)=>{
            if(index<customercomment.length+1 & index>customercomment.length-6){
              return  <div class="comment_review_2">
             <div class="comment_header2_1">
               <div class="comment_customer">
                 <div class="comment_customer_1">
                    <img src=" https://tiki.vn/assets/img/avatar.png"/>
                    <span>VT</span>
                 </div>
                 <div class="comment_customer_2">
                  <h5>{item.name}</h5>
                   <p>???? tham gia 4 n??m</p>
                 </div>
               </div>
               <div class="comment_customer1">
                 <img src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png"/>
                 <p>???? vi???t:</p>
                 <p>8 ????nh gi??</p>
               </div>
               <div class="comment_customer1">
                 <img src="https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"/>
                 <p>???? nh???n:</p>
                 <p>23 L?????t c???m ??n</p>
               </div>
             </div>
             <div class="comment_customer_content">
               <div class="comment_customer_content_1">
                 <i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i><i class="fa fa-star star"></i>
                 <h6>B??nh th?????ng</h6>
               </div>
               <div class="comment_customer_content_2">
                 <span></span>
                 ???? mua h??ng
               </div>
               <div class="comment_customer_content_3">
                 <p>{showcomment[index]?.commentText}</p>
               </div>
               <div class="comment_customer_content_4">
                 {showcomment[index]?.commentImg?
                  showcomment[index]?.commentImg?.map(item=>{
                    return <img src={item}/>
                  }):''
                 }
                 
               </div>
               <div class="comment_customer_content_5">
                 <p>????nh gi?? v??o 3 th??ng tr?????c-???? d??ng 2 ng??y</p>
               </div>
               <div class="comment_customer_content_6">
                 <p>H???u ??ch (22)</p>
                 <p>B??nh lu???n</p>
               </div>
             </div>
           </div>
            }else return ""
           })}
           <div class="comment_icon">
             <ul>
               <li><a href="">1</a></li>
               <li><a href="">2</a></li>
               <li><a href="">3</a></li>
               <li><a href="">4</a></li>
               <li><a href="">5</a></li>
             </ul>
           </div>
           <div style={imgBase64==""?{display:"none"}:{}} class="img_comment">
            {imgBase64?.map(item=>{
              return <img class="img2" src={item}/>
            })}
           </div>
           <div class="comment_writea">
            <div  class="comment_write">
             <img class="img1" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"/>
             <input class="inputtext" value={commentText} onChange={e=>setcommentText(e.target.value)} style={commentinput?{border: "1px solid rgb(24, 158, 255)"}:{}} onClick={clickComment} onBlur={BlurComment} type="" name=""/>
             
             <input id="file" class="inputimg inputfile" name="file" onChange={changeImg} type="file" data-multiple-caption="{count} files selected" multiple />
             <label for="file" ><i class="fas fa-images"></i></label>
             <img onClick={comment} class="img4" src="https://salt.tikicdn.com/ts/upload/1e/49/2d/92f01c5a743f7c8c1c7433a0a7090191.png"/>
           </div>
           </div>
         </div>
    </div>
}
