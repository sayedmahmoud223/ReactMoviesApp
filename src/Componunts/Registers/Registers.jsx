import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Registers() {
    let [Data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: ""
    });

    let [Message, setMassage] = useState("");
    let [errorList, setErrorList] = useState([])
    let [loading, setLoading] = useState(false)
    let navigate = useNavigate();
    function getData({ target }) {
        let myData = { ...Data };
        myData[target.name] = target.value;
        setData(myData);
        console.log(myData);

    }

    function Validatedata() {
        let scheme = Joi.object({
            first_name: Joi.string().uppercase(true).min(3).max(10).required(),
            last_name: Joi.string().min(3).max(10).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', "org"] } }).required(),
            password: Joi.string().pattern(/^[A-Z][a-z 0-9]{7,10}/),
            age: Joi.number().min(16).max(80)
        })

        return scheme.validate(Data, { abortEarly: false });
    }

    async function sendDate() {
        let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signup`, Data);
        if (data.message === "success") {
            setLoading(false)
            navigate("/login")
            // Tooo login | home page
        } else {
            setLoading(false);
            setMassage(data.message);
            console.log(Message);
        }

    }

    function onSubmit(e) {
        setLoading(true)
        e.preventDefault();
        // sendDate();
        let listOfErorr = Validatedata();

        if (listOfErorr.error) {
            setLoading(false);
            console.log(listOfErorr.error.details);
            setErrorList(listOfErorr.error.details)
        } else {
            sendDate();
        }
    }
    return <>
        <div className="container my-5">
            {errorList.map((ele, ind) => {
                if (ele.context.label == "password") {
                    return <div key={ind} className="alert alert-danger py-2">Invalid Password</div>
                } else {
                    return <div key={ind} className="alert alert-danger py-2">{ele.message}</div>
                }
            })}
            <form onSubmit={onSubmit}>
                {Message.length > 0 ? <div className="alert alert-danger py-2">{Message}</div> : ""}

                <label className='my-2' htmlFor="first_name">First Name : </label>
                <input onChange={getData} className='form-control py-2' type="text" name='first_name' id='first_name' />

                <label className='my-2' htmlFor="first_name">Last Name : </label>
                <input onChange={getData} className='form-control py-2' type="text" name='last_name' id='last_name' />

                <label className='my-2' htmlFor="age">Age : </label>
                <input onChange={getData} className='form-control py-2' type="number" name='age' id='age' />

                <label className='my-2' htmlFor="email">Email : </label>
                <input onChange={getData} className='form-control py-2' type="email" name='email' id='email' />

                <label className='my-2' htmlFor="password">password : </label>
                <input onChange={getData} className='form-control py-2' type="password" name='password' id='password' />


                <button className='btn btn-info my-3 text-white'>
                    {loading == true ? <i className='fas fa-spinner fa-spin'></i> : "Register"}
                </button>

            </form>
        </div>
    </>
}