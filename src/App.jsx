import React from 'react'
import PostDetails from './components/PostDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import GetUsers from './components/GetUsers';
import GetAllUsers from './components/GetAllUsers';
import DeleteUser from './components/DeleteUser';
import EditUser from './components/EditUser';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<PostDetails/>}/>
        <Route path='/read' element={<GetUsers/>}/>
        <Route path='/allUsers' element={<GetAllUsers/>}/>
        <Route path='/delete' element={<DeleteUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </Router>
  )
}

export default App
