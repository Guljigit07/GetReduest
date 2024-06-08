import React, { useContext } from 'react'
import {Link, useParams} from 'react-router-dom'
import { Context } from './index/Context'
import UserPage from './UserPage'
import styled from 'styled-components'

const Users = () => {
    const {users} = useContext(Context)
    
  return (
    <>
    <Div>
      <Zap>
      <h1>Zapros users</h1>
      </Zap>
      <Usersdiv>
       {
        users.map((el)=>(
            <div key={el.id}>
                <Link to={el.id.toString()}><h2>{el.name}</h2></Link>
            </div>
        ))  
       }
      </Usersdiv>
    </Div>
       <UserPage/>
    </>
  )
}

export default Users

const Div = styled.div`
    border: 1px solid;
    width: 40%;
    text-align: center;
`
const Zap = styled.div`
    border: 2px solid;
    background-color: black;
    color: aliceblue;
`
const Usersdiv = styled.div`
    border: 1px solid;
    max-height: 20em;
    overflow-y: scroll;
`