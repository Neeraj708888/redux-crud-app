import React from 'react'
import PostDetails from './components/PostDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import GetAllUsers from './components/GetAllUsers';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<PostDetails/>}/>
        <Route path='/read' element={<UserDetails/>}/>
        <Route path='/allUsers' element={<GetAllUsers/>}/>
      </Routes>
    </Router>
  )
}

export default App
