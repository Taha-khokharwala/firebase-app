import SingUp from './components/SingUp';
import SignIn from './components/SingIn';
import HomePage from './components/HomePage';
import { Routes, Route, BrowserRouter } from "react-router-dom";


import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element = {<SingUp/>}></Route>
    <Route exact path='/sign-in' element = {<SignIn/>}></Route>
    <Route exact path='Home-page' element = {<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

// const auth = getAuth(app);

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [showSignIn, setShowSignIn] = useState(false);

//   const SignInClick = () => {
//     setShowSignIn(true);
//   };

//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       alert("LogOut");
//       setShowSignIn(false);
//       setUser(null);
//     });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     },[]);

//     return () => unsubscribe();
//   }, []);

//   if (user === null) {
//     return (
//       <div>
//         {!showSignIn && (
//           <div>
//             <SingUp />
//             <p>
//               If you have an account, then click on{' '}
//               <a href='#s' onClick={SignInClick}>
//                 Sign In
//               </a>
//             </p>
//           </div>
//         )}
//         {showSignIn && <SignIn />}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <p>
//         <HomePage /> {user.email}
//       </p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default App;

