import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/index';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import styles from './authForm.module.css';
import { allowAccess } from '../../redux/userSlice';

export const Login = ({switchForm, setSwitchForm}) => {

  const [userLogin, setUserLogin] = useState({
    email:"",
    password:""
})
  const [loginError, setLoginError] = useState(false)
  const { email, password } = userLogin
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleInputChange = (e) => {
    setUserLogin(prev => ({...prev, [e.target.name]:e.target.value}))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      console.log("user", user)
      dispatch(allowAccess(user.displayName))
      navigate("/home")
      // dispatch(handleModal())
    } catch (error) {
      console.log(error)
      setLoginError(true)
    }
    setUserLogin({
      email:"",
      password:""
    })
  }

  const switchFormComponent = () => {
    // setSwitchForm(!switchForm)
  }
  


  return (
        <form onSubmit={handleSubmit} className={styles.form}>
          <legend>Login</legend>
            {
                loginError && <small style={{color:"red", fontSize:"1.4rem"}}>Invalid email or password</small>
            }
            <div className={styles.form__input}>
                <label htmlFor="">Email:</label>
                <input type="email" name="email" value={email} onChange={handleInputChange}/>
            </div>
            <div className={styles.form__input}>
                <label htmlFor="">Password:</label>
                <input type="password" name="password" value={password} onChange={handleInputChange}/>
            </div>
            <button type='submit' className={styles.form__button}>Submit</button>
            <Link to="/register">
              <p style={{textDecoration:"underline", textAlign:"center", cursor:"pointer"}}>Create an account</p>
            </Link>
        </form>
  )
}
