import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const UserPage = () => {
    const [user,setUser] = useState({}) 
    const {inner} = useParams()

    const getZaprosobj = async()=>{
        const rest = await fetch(`https://jsonplaceholder.typicode.com/users/${inner}`)
        const data = await rest.json()
        setUser(data)
    }
    useEffect(()=>{
      getZaprosobj()
    },[inner])

  return (
    <Div>
        <h1>{user.name}</h1>
        <b>{user.username}</b>
        <b>{user.phone}</b>
        <b>{user.email}</b>
    </Div>
  )
}

export default UserPage

const Div = styled.div`
  border: 1px solid;
  background-color: blueviolet;
  color: black;
  width: 40%;
  height: 10em;
  margin-top: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`