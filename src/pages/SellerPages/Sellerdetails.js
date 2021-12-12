import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,NavLink,Prompt,Switch, useHistory,Link} from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
export default function Sellerdetails(){
  const history=useHistory()
  return <div >
      <h1>details seller</h1>
      {console.log(history.location.state)}
      <img src={history.location.state?.background}/>
  </div>
    
  
}