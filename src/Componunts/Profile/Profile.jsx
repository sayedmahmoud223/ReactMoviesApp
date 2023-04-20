import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Profile() {
  let { userData } = useContext(AuthContext);
  // let { first_name, last_name, email, age } = userData
  return <>
    {userData !== null ? <div className="w-50 m-auto text-muted text-center">
      <h1>First Name : {userData.first_name}</h1>
      <h1>Last Name : {userData.last_name}</h1>
      <h1>Email : {userData.email}</h1>
      <h1>Age : {userData.age}</h1>

    </div> : ""}

  </>
}
