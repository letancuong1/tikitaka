import {useState} from 'react'
export default function Skill() {
	const [path,setpath]=useState()

	return <div class="container">
		<input onChange={e=>setpath(e.target.value)} type="file"/>
		<input value={path} type="text"/>
	</div>
}