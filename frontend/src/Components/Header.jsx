import React from "react"
import  ReactDOM from "react-dom"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../Store/Context"
import { useContext, useState,useEffect } from "react"
import Model from "../Model"
import MyCart from "../Pages/MyCart"

function Header() {

  const { isLoggedIn,itemList } = useContext(AuthContext)
  const[cartView,setCartView]=useState(false)
  const [number,setNumber]=useState(0)
  useEffect(()=>{
    setNumber(itemList.length)
  },[itemList])
 
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-1 fst-italic" to="/">GoFood</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link btn bg-white text-success m-3 " aria-current="page" to="/">Home</NavLink>
              </li>
              {isLoggedIn==true ? 
              <>
              
              <li className="nav-item">
              <NavLink className="nav-link btn bg-white text-success m-3" to="/myorder">My orders</NavLink>
              </li>
               
              <li className="nav-item">
              <div className="nav-link btn bg-white text-success m-3" onClick={()=>{setCartView(true)}}>My Cart{" "}<span className="badge badge-light text-success">{number}</span></div>
              </li>
               {cartView?<Model onClose={()=>setCartView(false)} ><MyCart/></Model>:null}
              <li className="nav-item">
                <NavLink className="nav-link btn bg-white text-success m-3" to="/logout">Logout</NavLink>
              </li>
               
              </>
              

              
              :
              <>
              <li className="nav-item">
                <NavLink className="nav-link btn bg-white text-success m-3" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn bg-white text-success m-3" to="/signup">SignUp</NavLink>
              </li>
              </> 
              }
              
             

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header