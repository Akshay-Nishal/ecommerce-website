import { useState, useRef } from 'react';

import classes from './LoginForm.module.css';
const API_KEY = 'AIzaSyD_wbBxYY-wn1p-CwM8sMA8OSqKorbLUSI'

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setLoading] = useState(false)
  const [isError,setError] = useState()
  const emailInputRef = useRef()
  const passInputRef = useRef()


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const loginFormSubmitHandler = (event)=>{
    setLoading(true)
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPass = passInputRef.current.value
    // console.log("Login ",enteredEmail,enteredPass)
    if(isLogin){
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPass,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>{
            setLoading(false)
            if(res.ok){
                return(res.json())
            }
            else{
                return res.json().then(data=>{
                    let errorMessage = 'Authentication Failed!'
                    throw new Error(errorMessage)
                })
            }
        })
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            window.alert(error)
            console.log(error)
        })

    

    }
    else{

        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPass,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>{
            setLoading(false)
            if(res.ok){
                return(res.json())
            }
            else{
                return res.json().then(data=>{
                    let errorMessage = 'Email Already Exists!'
                    throw new Error(errorMessage)
                    
                })
            }
        })
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            window.alert(error)
            console.log(error)
        })
    }
  }

  let content = <button onClick={loginFormSubmitHandler}>{isLogin?'Login':'Create Account'}</button>

  if (isLoading) {
    content = <p style={{color:'white'}} >Sending Request...</p>;
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailInputRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            ref={passInputRef}
            type='password'
            id='password'
            required
          />
        </div>
        <div className={classes.actions}>
            {content}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
