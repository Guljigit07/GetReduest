import { createContext, useEffect, useState } from "react"

export const Context = createContext()

export const ContextComponent = (props)=>{
  const [users,setUsers] = useState([])

  const getZapros = async()=>{
      const rest = await fetch("https://jsonplaceholder.typicode.com/users/")
      const data = await rest.json()
      setUsers(data)
  }
  useEffect(()=>{
    getZapros()
  },[])
  
  const value = {
     users,
    
  }
  
  return(
    <Context.Provider value={value}>
              {props.children}
    </Context.Provider>
  )
}