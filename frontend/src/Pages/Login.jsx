import { useState,useContext } from "react"
import { Link,useNavigate } from "react-router-dom"
import {toast} from "react-toastify"
import {AuthContext} from "../Store/Context"


function Login() {
  const navigate=useNavigate()
  const{storeTokenLs}=useContext(AuthContext)
  const [info, setInfo] = useState({
    email:"",
    password:""
  })
  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const response=await fetch("http://localhost:5001/api/login",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(info)
      })
      const res_data=await response.json()
      //console.log(res_data)
      if(response.ok){
        toast.success(res_data.message)
        storeTokenLs(res_data.token)
        navigate("/")
        
      }
      else{
        toast.error(res_data.message)
      }

    }catch(error){
      toast.error("frontend sign")
    }
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" required onChange={handleChange} value={info.email} />
          </div>

          <div className="mb-3">
            <label htmlFor="Password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" required onChange={handleChange} value={info.password} />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to={"/signup"} className="m-3 btn btn-danger">New User</Link>
        </form>
      </div>
    </>
  )
}
export default Login


