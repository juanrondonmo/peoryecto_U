import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../../firebase/index';
import { Link } from 'react-router-dom'
import styles from './authForm.module.css'

export const Register = ({switchForm, setSwitchForm}) => {

    const [userRegister, setUserRegister] = useState({
        name:"",
        lastName:"",
        email:"",
        password:""
    })
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [registerError, setRegisterError] = useState(false)
    const navigate = useNavigate()
    const { name, lastName, email, password } = userRegister

  
    const handleSubmit = async(e) => {
        e.preventDefault()
       try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(user,{
                displayName:name
            })
            console.log("user", user)
            navigate("/home")
            setSwitchForm(false)
        } catch (error) {
            console.log(error)
            setRegisterError(true)
        }
        setUserRegister({
            name:"",
            lastName:"",
            email:"",
            password:""
        })
    }

   
    const handleInputChange = (e) => {
        if(e.target.name === "email"){
            const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            setEmailError(emailPattern.test(e.target.value))
            
        }
        if(e.target.name === "password"){
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#/=._])[A-Za-z\d@$!%*?&#/=._]{8,}$/
            setPasswordError(passwordPattern.test(e.target.value))
        }

        setUserRegister(prev => ({...prev, [e.target.name]:e.target.value}))}

 

  return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <legend>Register</legend>
               
            <div className={styles.form__input}>
                <label htmlFor="username">Name:</label>
                <input id="username" type="text" name="name" value={name} onChange={handleInputChange} required/>
            </div>
            <div className={styles.form__input}>
                <label htmlFor="">Last Name:</label>
                <input type="text" name="lastName" value={lastName} onChange={handleInputChange} required/>
            </div>
            <div className={styles.form__input}> 
                <label htmlFor="">Email:</label>
                <input type="email" name="email" value={email} onChange={handleInputChange}/>
                {
                    !emailError && <small style={{color:"red", fontSize:"1.4rem"}}>Ingresa un email valido</small>
                }
            </div>
            <div className={styles.form__input}>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handleInputChange}/>{
                    !passwordError && 
                    (<ul className={styles.form__validation__text}>
                        <li>Debe tener 8 caracteres</li>
                        <li>Debe incluir una mayuscula</li>
                        <li>Debe incluir una minuscula</li>
                        <li>Debe incluir un numero</li>
                        <li>Debe incluir un caracter especial (@$!%*?&#/=._)</li>
                    </ul>)
                }  
            </div>
            <button type='submit' className={styles.form__button}>Submit</button>
            
            <Link to="/">
                <p style={{textDecoration:"underline", textAlign:"center", cursor:"pointer", color:"white"}}>Have an account already?</p>
            </Link>
        </form>
  )
}