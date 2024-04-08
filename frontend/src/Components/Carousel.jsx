import React, { useContext, useState } from "react"
import { AuthContext } from "../Store/Context"

function Carousel() {
  const{searchedItem}=useContext(AuthContext)
  const [search,setSearch]=useState("")
  const handleChange=(event)=>{
    setSearch(event.target.value)
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
   
    searchedItem(search)
    
    
  
  }
  return (
    <>


      <div id="carouselExample" className="carousel slide" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner">
          <div className="carousel-caption" style={{zIndex:"10"}}>

            <form onSubmit={handleSubmit} className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" name="search" aria-label="Search" onChange={handleChange} />
              <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>

          </div>
          <div className="carousel-item active" >
            <img src="https://source.unsplash.com/random/100×100/?burger" className="d-block w-100 " alt="..."  />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300/?pizza" className="d-block w-100" alt="..."  />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300/?sandwich" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


    </>
  )
}
export default Carousel