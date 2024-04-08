import { useContext } from "react"
import { AuthContext } from "../Store/Context"
import {toast} from "react-toastify"
function MyCart(){
const {itemList,removeIteminCart,token}=useContext(AuthContext)

const handleRemoveItem=(index)=>{
  removeIteminCart(index)
}
let totalPrice=itemList.reduce((total,food)=>total+food.itemPrice,0)
if(itemList.length==0){
  return(
    <div>
      <div className="m-5 w-100 text-centre fs-3">The Cart is Empty!</div> 
    </div>
  )
}
const handleCheckOut=async(event)=>{
  event.preventDefault()
  try{
    const response=await fetch("http://localhost:5001/api/orders",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      },
      body:JSON.stringify(itemList)
    })
    const res_data=await response.json()
    toast.success(res_data.message)
    setTimeout(() => {
      window.location.reload();
    }, 2000)

  }catch(error){
    console.log("frontend check out error")
  }
}


  return(
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
      <table className="table table-hover">
        <thead className="text-success fs-4">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Option</th>
            <th scope="col">Amount</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((food,index)=>(
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{food.itemName}</td>
              <td>{food.itemQty}</td>
              <td>{food.itemSize}</td>
              <td>{food.itemPrice}</td>
              <td> <button type="button" className="btn p-0" onClick={()=>{handleRemoveItem(index)}}>Remove</button></td>
              
            </tr>
           

          ))}
         
        </tbody>
      </table>
      <div>
        <h1 className="fs-2">Total Price {totalPrice}/-</h1>
      </div>
      <div>
        <button className="btn bg-success mt-5" onClick={handleCheckOut}>Check out</button>
      </div>

      </div>
         

    </div>
  )
}
export default MyCart