import {useState,useEffect} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { orther } from './../../redux/redux'
import { ortherInformation } from './../../redux/redux'
export default function AddCategoryPage(){
  const [category,setcategory]=useState('freshfood')
  const [category1,setcategory1]=useState(null)
  const addcategory=async(e)=>{
    e.preventDefault()
    await axios({
      method: 'post',
      url: 'http://localhost:3000/products/category',
      data:{
        categoryparent:category,
        categoryname:category1,
      }
    }).then(res=>{
        console.log(res.data)

    }).catch(err=>{
        console.log(err)
    })
    await setcategory1('')
    console.log(category,category1)
     
  }
  return <div class="container" >
    <form class="container">
        <div class="mb-3">
          <select value={category} onChange={e=>setcategory(e.target.value)}>
            <option value="freshfood">freshfood</option>
            <option value="tore">tore</option>
            <option value="housedoor">housedoor</option>
            <option value="digitaldevice">digitaldevice</option>
            <option value="telephone">telephone</option>
            <option value="mamababe">mamababe</option>
            <option value="beautiful">beautiful</option>
            <option value="appliances">appliances</option>
            <option value="womenfashion">womenfashion</option>
            <option value="menfashion">menfashion</option>
            <option value="womenshoes">womenshoes</option>
            <option value="menshoes">menshoes</option>
            <option value="femalebag">femalebag</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">name category</label>
          <input onChange={e=>setcategory1(e.target.value)} value={category1}  name="password" type="text" class="form-control" />
        </div>
        <button onClick={addcategory} type="submit" class="btn btn-primary">thêm</button>
      </form>
  </div>
  
}
 