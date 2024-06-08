import React, { useContext } from 'react'
import {Route, Routes} from 'react-router-dom'
import Users from '../Users'
import UserPage from '../UserPage'

const GlobalRouter = () => {
  
  return (
    <div>
        <Routes>
          <Route path=''element={<Users/>}>
           <Route path=":inner" element={<UserPage/>}/> 
          </Route>  
          <Route path='*'element={<h1>No info</h1>}/>
        </Routes>
    </div>
  )
}

export default GlobalRouter