import React, { useState, useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { auth } from './firebase';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import Loading from './Components/Loading/Loading';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser);
        console.log(authUser)
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    })

    return currentUser;
  }, [])
  return (
    <>
      {loading ? <Loading /> :
        <div className="app">
          <Router>
            {!user ? <LoginScreen /> :
              <Routes>
                <Route path="/" index element={<HomeScreen />} />
                <Route path="/profile" element={<ProfileScreen user={user}/>} />
              </Routes>
            }
          </Router>
        </div>
      }
    </>
  );
}

export default App;
