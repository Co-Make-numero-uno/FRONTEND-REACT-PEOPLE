import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components'npm 


const defaultUserState = {
  email: '',
  password: '',
}

const Login = () => {
    const [user, setUser] = useState(defaultUserState);
    
    // const handleChange = event => {
    //     setUser({ ...user, [event.target.name]: event.target.value });
    //   };
    
      // const handleSubmit = event => {
      //   event.preventDefault();
      //   console.log(user.email);
      //   console.log(user.password);
      // };


      const handleSubmit = e => {
        e.preventDefault();
        console.log('form Submitted:', user);
        axios.post("https://co-make-back-end.herokuapp.com/users/login", user)
            .then(res => {
                console.log('res:', res.data);
                setUser(defaultUserState);
                // history.push('/')
            })
            .catch(err => console.log(err));
    }

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        // if (e.target.name === 'email' || e.target.name === 'password') {
        //     validate(e);
        // }
    }
      

    return (
        <div>
            <h1>Login Here</h1>
            <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={user.email} onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password} onChange={handleChange}
          />
        </label>
        <button>Submit!</button>
      </form>   
        </div>
    );
};

export default Login;