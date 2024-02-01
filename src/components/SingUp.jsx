import React, { Fragment, useState } from 'react'
import {getAuth ,  createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from './firebase'
import { Link, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const SingUp = () => {

  const [email , setEmail]  = useState ('');
  const [password , setPassword] = useState('');
  const [name , setName] = useState('');
  const navigate = useNavigate()

  const createUser = (e) => {
    e.preventDefault()
    console.log(email , password);
     createUserWithEmailAndPassword(auth , email , password)
     .then(value => alert("Successfully Added"))
     .then((auth) => {
      navigate('/Home-page')
     })
     .catch((e) => {
      alert(e)
     })
  }
  return (
    <form>
    <Fragment>
    <label> Name : </label>
    <input onChange={(e) => setName(e.target.value)}
    value={name}
    placeholder='Enter your name...'></input><br></br><br></br>
    <label>Email : </label>
    <input onChange={(e) => setEmail(e.target.value)}
    value={email}
    type='email'
    pattern='/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/'
    placeholder='Enter your Email...'
    required></input>

    <br></br><br></br>
    <label>Password : </label>
    <input
    onChange={(e) => setPassword(e.target.value)}
    value={password} type='password'
    placeholder='Enter your Password...'
    required></input>
    <br></br><br></br>

    <button onClick={createUser}  type='Submit'>SING UP</button>
    </Fragment>
    <p>If you have an account the click on <Link to='/sign-in' >Sing in</Link></p>
    </form>
  )
}

export default SingUp