import React from 'react'
import { isUser } from '../actions/user'
import {LoadingIndicator} from './LoadingIndicator'



const LoginPage = () => {

    const userCheck = (e) => {
        sessionStorage.setItem("isAdmin", '')
        e.preventDefault()
        const user = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }

        isUser(user, (error, data) => {
            if (error) {
                alert('Something went wrong')

            }
            else {
                if (data['Result'] == null) {
                    alert('Invalid User Details')

                }
                else {
                    if (data['Result']['isAdmin'] === 1)
                        sessionStorage.setItem("isAdmin", true)
                    window.location.href = '/dashboard'
                }
            }

        })


    }


    return (
        <>
        <div className="loginbox-layout">
        <div className="loginbox-layout__box">
        <LoadingIndicator />
        <h1 className="loginbox-layout__title">Welcome To AMDB</h1>
        <form  className="form" onSubmit={userCheck}>
        <input type="text" className="text-input smallheight" id="username" placeholder="username" required />
        <input type="password" className="text-input smallheight" id="password" placeholder="password" required />
        <button className="button" >Login</button>
        </form>
        </div>
        </div>
       </>
    )
}

export default LoginPage

