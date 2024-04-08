import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Store/Context";

function Myorders() {
  const { token } = useContext(AuthContext);
  const [orderData, setOrderData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/allorders", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const resData = await response.json();
      //console.log(resData)
      
      setOrderData(resData)
      
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);
 // console.log("order data",orderData)

  return (
    <>
    <div className="container">
      <div className="row">
        <div>
        {orderData.slice().reverse().map((data,index)=>(
          <div key={index} className="m-auto mt-5">
            <div>{data.date}</div>
            <hr/>
          <div>
            {data.details.map((item,itemIndex)=>(
              <div key={itemIndex} className="col-12 col-md-6 col-lg-3">
              <div className="card mt-3" style={{width:"16rem",maxHeight:"360px"}}>
                <div className="card-body">
                <h5 className="card-title">{item.itemName}</h5>
                <div className='container w-100 p-0' style={{ height: "38px" }}>
                <span className='m-1'>Quantity-{item.itemQty}</span>
                <span className='m-1'>Size-{item.itemSize}</span>
              
                <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                
                  Rs{item.itemPrice}
                </div>

                </div>

                </div>

              </div>

              </div>
            ))}
          </div>
          </div>
    

          
        ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Myorders;
