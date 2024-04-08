import { useState, useContext } from "react"
import { AuthContext } from "../Store/Context"
function FootItemCard({ item, addIteminCart }) {
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState(Object.keys(item.options[0])[0] || "")
  const handleSize = (event) => {
    setSize(event.target.value)

  }

  const handleQty = (event) => {
    setQty(event.target.value)
  }
  const handleAddtoCart = (id, name, qty, size,price) => {
    //console.log(price)
    addIteminCart(id, name, qty, size,price)
    //setQty(1)
    //setSize("")
  }
  return (
    <>
      <div className="card m-3 mt-5 col-12 col-md-6 col-lg-3 " style={{ width: "18rem", maxHeight: "500px" }}>
        <img src={item.img} className="card-img-top mt-2" alt="..." style={{ height: "10rem" }} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{ }</p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-success rounded" onChange={handleQty}>
              {Array.from(Array(7), (e, i) => {
                return (<option key={i + 1} value={i + 1} >{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100  bg-success rounded" onChange={handleSize}>
              {Object.keys(item.options[0]).map((data, index) => (
                <option key={index} value={data} >{data}</option>
              ))}
            </select>
            <br/>
            
            <div className="d-flex align-items-center">
            {(Object.entries(item.options[0])).map(([key, value], index) =>{
              const totalPrice=value*qty
            return key === size ? (

               
              <div className=" d-inline fs-5" key={index} >
                {`₹${totalPrice}/-`}
                <br/>
                <button className="btn btn-success justify-center ms-2 " onClick={() => handleAddtoCart(item._id, item.name, qty, size,totalPrice)}>Add to Cart</button>
              </div>
            ) : null
            })}
          </div>
          </div>
          <hr></hr>
          
        </div>
      </div>
    </>
  )
}
function Card() {
  const { foodItem, foodCat, searchItem, addIteminCart,itemList } = useContext(AuthContext)
  //console.log("from home",searchItem)
  //console.log(itemList)
  return (
    <>
      {foodCat.map((cat, index) => {
        return (
          <div className="row  mb-3"  key={index}>
            <div className="fs-3 m-3">
              {cat.CategoryName}
            </div>

            <hr />
            {foodItem
              .filter((data) => (data.CategoryName === cat.CategoryName) && data.name.toLowerCase().includes(searchItem.toLowerCase()))
              .map((item) => (
                <FootItemCard key={item._id} item={item} addIteminCart={addIteminCart} />
              ))}
          </div>

        )
      })}
    </>
  )
}
export default Card

















