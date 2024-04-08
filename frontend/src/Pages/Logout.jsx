import { useContext, useEffect } from "react"
import { AuthContext } from "../Store/Context"
import { Navigate } from "react-router-dom"

function Logout(){
const {logoutUser}=useContext(AuthContext)
 useEffect(()=>{
  logoutUser()
 },[])
  return(
    <>
        <Navigate to={"/"}></Navigate>
    </>
  )
}
export default Logout