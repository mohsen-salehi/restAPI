import React, {useState} from 'react';
import {useNavigate} from "react-router";

function Register() {
    const navigate = useNavigate()
    const [email , setEmail] = useState([])
    const [pass , setPass] = useState([])
    const formHandler = async (e) => {
        e.preventDefault()
        const res = await fetch("http://link.pishroapp.net/register", {
            method : "POST" ,
            body: JSON.stringify({
                email: email,
                password: pass
            })
        })
        const data = await res.json()
        console.log(data)
        alert(data.message)
        // اینجا اول میای ریجستر میکنی بعد میری باهمین ایمل لاگین میکنی  همین و بس
        if(data.data){
            navigate('/login')
        }
    }


    return (
        <form onSubmit={formHandler} className="col-11 flex-wrap col-xl-4 p-2 d-flex justify-content-center align-items-center bg-danger bg-opacity-25 rounded shadow-sm">
            <div className="col-12 h4 text-center">Register</div>
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

export default Register;