import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';
import { Link } from 'react-router-dom';
import SingUp from './SingUp';

const auth = getAuth(app);

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect((e) => {
    onAuthStateChanged(auth , (user) => {
      if(user) {
        setUser(user);
      }
      else{
        setUser(null)
      }
    });
  },[])

  if (user === null){
    return (
      <div>
      <SingUp/>
      </div>
    )
  }
  return(
    <div>
    <h1>Hello {user.email}</h1>
    <Link to = '/'>
    <button onClick={() => signOut(auth)}>Logout</button>
    </Link>
    </div>
  )

  // return
  // const handleSignOut = async (e) => {
  //   e.preventDefault()
  //     await signOut(auth);
  //     alert("Logout")
  // };

};

export default HomePage;
