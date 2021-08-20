import React, { useState } from 'react'

export default function Login() {
 let initialState = {name :'', email:'', password:''}

 let [state, setState] = useState(initialState)

    const handleChange = (e) => {

        let {name, value} = e.target;
        setState(prevState => ({...prevState, [name]:value}));
        console.log(state)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

    } 
    return (
        <div data-testid="login-cp">
            <form onSubmit={handleSubmit} >
                <label aria-label="Username" htmlFor="userName">Username</label>
            <input  type="text" name="userName" onChange={handleChange} required/>
            <label aria-label="Email" htmlFor="userEmail">Email</label>
            <input type="userEmail" name="email" onChange={handleChange} required/>
            <label htmlFor="userPassword">Password</label>
            <input aria-label="Password" type="userPassword" name="password" onChange={handleChange} required/>
            <button>Submit</button>
            </form>
        </div>
    )
}
