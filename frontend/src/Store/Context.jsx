import { createContext, useState,useEffect, useReducer } from "react";

export const AuthContext=createContext({})

const reducerFunc=(currState,action)=>{
  let newitemList=[...currState]
  if(action.type=="ADD_ITEM"){
    newitemList=[...currState,{itemId:action.payload.id,itemName:action.payload.name ,itemQty:action.payload.qty,itemSize:action.payload.size,itemPrice:action.payload.price}]
  }
  else if(action.type=="DELETE_ITEM"){
    newitemList.splice(action.index,1)
        
  }
      
    
    
  return newitemList
}

const AuthContextProvider=({children})=>{
  const[itemList,dispatch]=useReducer(reducerFunc,[])

  const[token,setToken]=useState(localStorage.getItem("token"))
  const[searchItem,setSearchItem]=useState("")

  const storeTokenLs=(loginToken)=>{
    setToken(loginToken)
    localStorage.setItem("token",loginToken)
  }

  //search item
  const searchedItem=(search)=>{
    setSearchItem(search)
  }
   
  let isLoggedIn=!!token
    


  //logout 
  const logoutUser=()=>{
    localStorage.removeItem("token");
    setToken("")
  }

  const addIteminCart=(id,name,qty,size,price)=>{
      const newItemAction={
        type:"ADD_ITEM",
        payload:{
          id,name,qty,size,price
        }
      }
    dispatch(newItemAction)
  }

  const removeIteminCart=(index)=>{
    //console.log(index)
    const deleteItemAction={
      type:"DELETE_ITEM",
      index:index
      
    }
    dispatch(deleteItemAction)
  } 

  //tofetch food item and food category


  const[foodItem,setFoodItem]=useState([])
  const[foodCat,setFoodCat]=useState([])
  const fooditems=async()=>{
    try{
      const response=await fetch("http://localhost:5001/api/allitem",{
        method:"GET"
      })
      const res_data=await response.json()
      //console.log(res_data)
      setFoodItem(res_data)

    }catch(error){
      console.log("food item fetching error")
    }
  }

  const foodCategory=async()=>{
    try{
      const response=await fetch("http://localhost:5001/api/allcategory",{
        method:"GET"
      })
      const res_data=await response.json()
      //console.log(res_data)
      setFoodCat(res_data)

    }catch(error){
      console.log("food cat fetching error")
    }

  }

  useEffect(()=>{
    fooditems()
    foodCategory()
  },[])


  return(
    <AuthContext.Provider value={{itemList,storeTokenLs,token,isLoggedIn,logoutUser,foodItem,foodCat,searchedItem,searchItem,addIteminCart,removeIteminCart}}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider