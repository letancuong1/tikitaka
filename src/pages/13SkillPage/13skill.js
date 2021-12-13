import {useState} from 'react'
export default function Skill() {
	const [path,setpath]=useState()
	const change=(e)=>{
		console.log(e.target.files[0].name)
	}
	return <div class="container">
		<input onChange={e=>setpath(e.target.files[0].name)} type="file"/>
		<input value={path?window.location.origin+"/"+`${path}`:""} type="text"/>
	</div>
}
