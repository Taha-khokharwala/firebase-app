import React, { Fragment, useState } from 'react'
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth'
import { app } from './firebase'
import { Link, useNavigate} from 'react-router-dom';

const auth = getAuth(app);

const SingIn = () => {
    const [email  , setEmail] = useState ('');
    const [password , setPassword] = useState ('');
    const navigate = useNavigate()

    const SignInUser = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth , email , password)
        .then(value => alert("Successfully SignIn"))
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
    <label>Email : </label>
    <input onChange={(e) => setEmail(e.target.value)}
    value={email}
    type='email'
    pattern='/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/'
    placeholder='Enter your Email...'
    required></input><br></br><br></br>

    <label>Password : </label>
    <input
    onChange={(e) => setPassword(e.target.value)}
    value={password} type='password'
    placeholder='Enter your Password...'
    required></input><br></br><br></br>

    <button onClick={SignInUser}type='Submit'>SING In</button>
    </Fragment>
    <p>Don't have account <Link to='/'>Singup</Link></p>
    </form>
  )
}

export default SingIn