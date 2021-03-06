import {useState,useEffect} from 'react'
import { render } from '@testing-library/react';
import {BrowserRouter as Router,Route,NavLink,Prompt,Switch,useHistory} from 'react-router-dom'
import axios from 'axios'
import './AddProduct.css'
import { useSelector, useDispatch } from 'react-redux'
import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from '../../tools'
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from "draft-js"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';

export default function AddProduct(){
  const ReactEditorJS = createReactEditorJS()
  const [ProductName,setProductName]=useState(null);
  const [Img,setImg]=useState(null)
  const [Img1,setImg1]=useState(null)
  const [Img2,setImg2]=useState(null)
  const [Img3,setImg3]=useState(null)
  const [Img4,setImg4]=useState(null)
  const [SupplierID,setSupplierID]=useState(null);
  const [Quantity,setQuantity]=useState(null)
  const [Price,setPrice]=useState(null);
  const [Pricereduce,setPricereduce]=useState(null);
  const [CategoryID,setCategoryID]=useState(null);
  const [Description,setDescription]=useState(null);
  const [Trademark,setTrademark]=useState(null);
  const [Origin,setOrigin]=useState(null);

  const [categorys,setcategorys]=useState(null);
  const [editorState,seteditorState]=useState(EditorState.createEmpty())

  const [ParameterHeader,setParameterHeader]=useState(null);
  const [ParameterContent,setParameterContent]=useState(null);

  const [editorStateparameter,seteditorStateparameter]=useState(EditorState.createEmpty())
  const [editorStateparameter1,seteditorStateparameter1]=useState(EditorState.createEmpty())
  const history=useHistory()


  const onEditorStateChange=(editorState)=>{
    seteditorState(editorState)
    setDescription(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    console.log(Description)
  }
  const onEditorStateChangeparameter=(editorStateparameter)=>{
    seteditorStateparameter(editorStateparameter)
    setParameterHeader(draftToHtml(convertToRaw(editorStateparameter.getCurrentContent())))
    console.log(ParameterHeader)
  }
  const onEditorStateChangeparameter1=(editorStateparameter1)=>{
    seteditorStateparameter1(editorStateparameter1)
    setParameterContent(draftToHtml(convertToRaw(editorStateparameter1.getCurrentContent())))
    console.log(ParameterContent)
  }
  const submit=async(e)=>{
    e.preventDefault()
    await axios({
      method: 'post',
      url: 'http://localhost:3000/products/add',
      data:{
        'ProductName':ProductName,
        'Img':Img,
        'Img1':Img1,
        'Img2':Img2,
        'Img3':Img3,
        'Img4':Img4,
        'SellerID':SupplierID,
        'Quantity':Quantity,
        'CategoryID':CategoryID,
        'Price':Price,
        'Pricereduce':Pricereduce,
        'Description':Description,
        'ParameterHeader':ParameterHeader,
        'ParameterContent':ParameterContent,
        'Trademark':Trademark,
        'Origin':Origin,
      }
    }).then(res=>{
        alert(res.data)
        setProductName('')
        setImg('')
        setImg1('')
        setImg2('')
        setImg3('')
        setImg4('')
        setPricereduce('')
        setQuantity('')
        setPrice('')
        setCategoryID('')
        setDescription('')        
        setParameterHeader('')
        setParameterContent('')
        setTrademark('')
        setOrigin('')
        seteditorState('')
    }).catch(err=>{
        console.log(err)
    })


  }
  useEffect(()=>{
    axios({
      method: 'post',
      url: 'http://localhost:3000/products/showcategory',
    }).then(res=>{
        setcategorys(res.data)
        console.log(res.data)
    }).catch(err=>{
        console.log(err)
    })
    setSupplierID(history.location.state[0]?._id)
    console.log(history.location.state[0])

  },[])
  const category=(id)=>{
    setCategoryID(id)
  }
  const changeImg=(e)=>{
    console.log(e.target.value)
  }
  return <div>
    <p>{history.location.state[0]?.nameseller}</p>
    <form class="container"  enctype="multipart/form-data">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">t??n s???n ph???m</label>
          <input value={ProductName} onChange={(e)=>setProductName(e.target.value)} name="ProductName" type="text" class="form-control" />
          
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">???nh s???n ph???m</label>
          <input value={Img} placeholder="https://" onChange={(e)=>setImg(e.target.value)} name="Img" type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">???nh s???n ph???m 1</label>
          <input value={Img1} placeholder="https://" onChange={(e)=>setImg1(e.target.value)} name="Img1" type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">???nh s???n ph???m 2</label>
          <input value={Img2} placeholder="https://" onChange={(e)=>setImg2(e.target.value)} name="Img2" type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">???nh s???n ph???m 3</label>
          <input value={Img3} placeholder="https://" onChange={(e)=>setImg3(e.target.value)} name="Img3" type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">???nh s???n ph???m 4</label>
          <input value={Img4} placeholder="https://" onChange={(e)=>setImg4(e.target.value)} name="Img4" type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 category_button">
          <a href="#"  onClick={e=>e.preventDefault()}>ch???n lo???i s???n ph???m</a>
          <ul class="category_add">
            <li>
              <p>Th???c ph???m t????i s???ng</p>
              <ul class="menu_lv2">
                {categorys?.map(item=>{
                  return <li style={item.categoryparent=="freshfood"?null:{display:'none'}}  onClick={()=>category(item._id)}>{item.categoryparent=="freshfood"?item.categoryname:null}</li>
                })}
              </ul> 
            </li>
            <li>
              <p>B??ch h??a</p>
              <ul class="menu_lv2">
                {categorys?.map(item=>{
                  return <li style={item.categoryparent=="tore"?null:{display:'none'}}  onClick={()=>category(item._id)}>{item.categoryparent=="tore"?item.categoryname:null}</li>
                })}
              </ul>
            </li>
            <li>
              <p>Nh?? c???a</p>
                <ul class="menu_lv2">
                {categorys?.map(item=>{
                  return <li style={item.categoryparent=="housedoor"?null:{display:'none'}} onClick={()=>category(item._id)}>{item.categoryparent=="housedoor"?item.categoryname:null}</li>
                })}
              </ul>
            </li>
            <li>
              <p>Thi???t b??? s???</p>
              <ul class="menu_lv2">
                {categorys?.map(item=>{
                  return <li style={item.categoryparent=="digitaldevice"?null:{display:'none'}}  onClick={()=>category(item._id)}>{item.categoryparent=="digitaldevice"?item.categoryname:null}</li>
                })}
              </ul>
            </li>
            <li>
              <p>M??? v?? b??</p>
              <ul class="menu_lv2">
                <li>??i???m 1</li>
                <li>??i???m 2</li>
                <li>??i???m 3</li>
              </ul>
            </li>
            <li>
              <p>??i???n tho???i</p>
              <ul class="menu_lv2">
                 {categorys?.map(item=>{
                  return <li style={item.categoryparent=="telephone"?null:{display:'none'}}  onClick={()=>category(item._id)}>{item.categoryparent=="telephone"?item.categoryname:null}</li>
                })}
              </ul>
            </li>
            <li>
              <p>L??m ?????p</p>
              <ul class="menu_lv2">
                 {categorys?.map(item=>{
                  return <li style={item.categoryparent=="beautiful"?null:{display:'none'}}  onClick={()=>category(item._id)}>{item.categoryparent=="beautiful"?item.categoryname:null}</li>
                })}
              </ul>
            </li>
            <li>
              <p>Da d???ng</p>
              <ul class="menu_lv2">
                <li>??i???m 1</li>
                <li>??i???m 2</li>
                <li>??i???m 3</li>
              </ul>
            </li>
            <li>
              <p>Th???i trang n???</p>
              <ul class="menu_lv2">
                <li>??i???m 1</li>
                <li>??i???m 2</li>
                <li>??i???m 3</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mb-3">
          <label for="img" class="form-label">s??? l?????ng</label>
          <input value={Quantity} onChange={(e)=>setQuantity(e.target.value)} name="Quantity" type="text" class="form-control" id="img"/>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">gi?? g???c</label>
          <input value={Price} onChange={(e)=>setPrice(e.target.value)} name="Price" type="text" class="form-control" id="price"/>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">gi?? gi???m</label>
          <input value={Pricereduce} onChange={(e)=>setPricereduce(e.target.value)} name="Pricereduce" type="text" class="form-control" id="price"/>
        </div>
        <div class="mb-3">
          <h5>Th??ng s??? Chi ti???t</h5>
          <div class="parameteradd">
            <div class="parameter_header">
            <h6>Lo???i Th??ng S???</h6>
            <Editor
            editorState={editorStateparameter}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChangeparameter}
            />
          </div>
          <div class="parameter_content">
            <h6>n???i dung th??ng s???</h6>
            <Editor
            editorState={editorStateparameter1}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChangeparameter1}
            />
          </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">th????ng hi???u</label>
          <input value={Trademark} onChange={(e)=>setTrademark(e.target.value)} name="Parameter" type="text" class="form-control" id="parameter"/>
        </div>
        <div class="mb-3">
          <label  class="form-label">xu???t s???</label>
          <input value={Origin} onChange={(e)=>setOrigin(e.target.value)}  type="text" class="form-control" id="parameter"/>
        </div>
        <div class="mb-3 editor">
          <label class="form-label">Editor</label>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
          
        </div>
        <button onClick={submit} type="submit" class="btn btn-primary">th??m s???n ph???m</button>
      </form>
  }
  </div>
}
// <div class="mb-3 editor">
//           <ReactEditorJS  defaultValue="1" tools={EDITOR_JS_TOOLS} />
          
//         </div> 
