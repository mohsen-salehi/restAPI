import React, {useState} from 'react';
import {useNavigate} from "react-router";

function Login() {

    const [email , setEmail] = useState([])
    const [pass , setPass] = useState([])
    const navigate = useNavigate()
    const formHandler = async (e) => {

        e.preventDefault()
        const res = await fetch("http://link.pishroapp.net/login", {
            method : "POST" ,
            body: JSON.stringify({
                email: email,
                password: pass
            })
        })
        console.log(res)
        const data = await res.json()
        alert(data.message)
        // اینجا به ما یه توکن میده که باید اون رو توی لوکال استورج ذخیره کرد
        // console.log(data?.data?.token)
        localStorage.setItem('token' , data?.data?.token)
        navigate('/create_link')
    }

    // این همینجا تموم میشه یعنی ما توکن رو میگیریم یه جا ذخیرع میکنیم

    return (
        <form onSubmit={formHandler} className="col-11 flex-wrap col-xl-4 p-2 d-flex justify-content-center align-items-center bg-danger bg-opacity-25 rounded shadow-sm">
            <div className="col-12 h4 text-center">Login</div>
            <label className="col-12 d-flex justify-content-start  align-items-center flex-wrap p-2 my-2">
                email :
                <input onInput={e => setEmail(e.target.value)} type="text" name="email" id="email" className="col-12 my-2 p-2 rounded border-0 "/>
            </label>
            <label className="col-12 d-flex justify-content-start  align-items-center flex-wrap p-2 my-2">
                password :
                <input onInput={e => setPass(e.target.value)} type="text" name="email" id="email" className="col-12 my-2 p-2 rounded border-0 "/>
            </label>
            <div className="col-12 d-flex justify-content-center align-items-center">
                <button className="btn btn-success"> accept </button>
            </div>
        </form>
    );
}

export default Login;