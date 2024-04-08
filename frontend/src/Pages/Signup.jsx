import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import {toast} from "react-toastify" 

function Signup() {
  const navigate=useNavigate()
  const [info,setInfo]=useState({
    name:"",
    email:"",
    location:"",
    password:""
  })
  const handleChange=(event)=>{
    setInfo({
      ...info,
      [event.target.name]:event.target.value
    })
  }

  const handleSubmit=async(event)=>{
    event.preventDefault()
    try{
      const response=await fetch("http://localhost:5001/api/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(info)
      })
      const res_data=await response.json()
      if(response.ok){
        toast.success(res_data.message)
        navigate("/")
        
      }else{
        toast.error(res_data.message)
      }

    }catch(error){
      console.log("signup error",error)
    }
  }

  return (
    <>
      <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="Name" className="form-label">Username</label>
          <input type="text" className="form-control" name="name" required onChange={handleChange} value={info.name} />
            
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" required onChange={handleChange} value={info.email} />
            
        </div>
        <div className="mb-3">
          <label htmlFor="Location" className="form-label">Address</label>
          <input type="text" className="form-control" name="location"  required onChange={handleChange} value={info.location}/>
            
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input type="password" className="form-control"name="password" required onChange={handleChange}value={info.password} />
        </div>
        
        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to={"/login"} className="m-3 btn btn-danger">Already a User</Link>
      </form>
      </div>
    </>
  )
}
export default Signup