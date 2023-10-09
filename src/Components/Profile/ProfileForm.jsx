import { useContext, useRef, useState } from 'react';
import classes from './ProfileForm.module.css';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom'
const API_KEY = 'AIzaSyD_wbBxYY-wn1p-CwM8sMA8OSqKorbLUSI'



const ProfileForm = () => {
  const userCtx = useContext(UserContext)
  const history = useNavigate()

  const newPassRef = useRef()
  const [sizeAlert,setSizeAlert] = useState(false)
  // console.log(userCtx.currentUserData.idToken)
  const changePasswordHandler =(event)=>{
    event.preventDefault()
    const enteredNewPass = newPassRef.current.value
    if(enteredNewPass.trim().length < 8){
      setSizeAlert(true)
    }
    else{
      setSizeAlert(false)
      console.log("New Pass : ",enteredNewPass)
      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        method:'POST',
          body:JSON.stringify({
              idToken:userCtx.currentUserData.idToken,
              password:enteredNewPass,
              returnSecureToken:true
          }),
          headers:{
              'Content-Type':'application/json'
        }
      })
      .then(res=>{
        if(res.ok){
            return(res.json())
        }
        // else{
        //     return res.json().then(data=>{
        //         let errorMessage = 'some Error'
        //         throw new Error(errorMessage)
        //     })
        // }
    })
    .then(data=>{
        console.log(data)
        history('/', { replace: true })


    })
    .catch(error=>{
        console.log(error)
    })
      
    }
  }
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPassRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        {sizeAlert && <p>Enter 8 or more characters</p> }
        <button onClick={changePasswordHandler}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
