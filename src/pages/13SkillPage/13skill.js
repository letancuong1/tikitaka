import {useState,useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { imgaction } from './../../redux/redux'
import { imgskill } from './../../redux/redux'
export default function Skill() {
	// const [abc,setabc]=useState()
	const [img,setimg]=useState(0)
	useEffect(async() => {
		var ca=dataURItoBlob(localStorage.getItem("file"))
		var ha=URL.createObjectURL(ca)
		setimg(ha)
    
  }, []);
	const change=(e)=>{
		var a=(e.target.files[0])
		// var b=document.querySelector(".linkTo")
		
		var blob=new Blob([a],{type:"image/png"})
		console.log(blob)
		// b.href=objUrl
		// setimg(objUrl)
		// b.innerHTML=objUrl
		// localStorage.setItem('imgbb',objUrl)
		const reader = new FileReader();
		reader.onload = (event) => {
		  localStorage.setItem("file", event.target.result);
		}
		reader.readAsDataURL(blob);

	}
	function dataURItoBlob(dataURI) {
	// convert base64 to raw binary data held in a string
	// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
		var byteString = atob(dataURI.split(',')[1]);

		// separate out the mime component
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

		// write the bytes of the string to an ArrayBuffer
		var ab = new ArrayBuffer(byteString.length);

		// create a cview into the buffer
		var ia = new Uint8Array(ab);

		// set the bytes of the buffer to the correct values
		for (var i = 0; i < byteString.length; i++) {
		  ia[i] = byteString.charCodeAt(i);
		}

		// write the ArrayBuffer to a blob, and you're done
		var blob = new Blob([ab], {type: mimeString});
		return blob;

	}



  return <div class="container">
		<input onChange={change} type="file"/>
		<a style={{marginLeft:"300px"}} class="linkTo" href="./BÁNH RĂNG TRỤ.jpg">chưa có link</a>
		<img src={img}/>

	</div>
}
