import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
export default function Login({ saveUserData }) {
  
  let [Data, setData] = useState({

    email: "",
    password: ""
  });


  let [Message, setMassage] = useState("");
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false)
  function getData({ target }) {
    let myData = { ...Data };
    myData[target.name] = target.value;
    setData(myData);
    console.log(myData);

  }

  async function sendDate() {
    let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signin`, Data);
    if (data.message === "success") {
      setLoading(false)
      localStorage.setItem("token", data.token);
      saveUserData();
      navigate("/")
      // Tooo login | home page
    } else {
      setLoading(false)
      setMassage(data.message)
      console.log(Message);
    }

  }

  function onSubmit(e) {
    setLoading(true)
    e.preventDefault();
    sendDate();
  }
  return <>
    <div className="container my-5">
      <form onSubmit={onSubmit}>
        {Message.length > 0 ? <div className="alert alert-danger py-2">{Message}</div> : ""}

        <label className='my-2' htmlFor="email">Email : </label>
        <input onChange={getData} className='form-control py-2' type="email" name='email' id='email' />

        <label className='my-2' htmlFor="password">password : </label>
        <input onChange={getData} className='form-control py-2' type="password" name='password' id='password' />


        <button className='btn btn-info my-3 text-white'>
          {loading == true ? <i className='fas fa-spinner fa-spin'></i> : "Login"}
        </button>

      </form>
    </div>
  </>
}