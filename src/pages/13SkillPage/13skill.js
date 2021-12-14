import {useState} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { imgaction } from './../../redux/redux'
import { imgskill } from './../../redux/redux'
export default function Skill() {
	const [img,setimg]=useState(0)
	const change=(e)=>{
		var a=(e.target.files[0])
		var b=document.querySelector(".linkTo")
		setimg(a)
		var blob1=new Blob([a],{type:"image/png"})
		var objUrl=URL.createObjectURL(blob1)
		b.href=objUrl
		console.log(objUrl)
		b.innerHTML=objUrl
	}
  return <div class="container">
		<input onChange={change} type="file"/>
		<a style={{marginLeft:"300px"}} class="linkTo" href="./BÁNH RĂNG TRỤ.jpg">chưa có link</a>
	</div>
}
