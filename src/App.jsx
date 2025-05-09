
import PostDetails from './components/PostDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import GetUser from './components/GetUser';
import DeleteUser from './components/DeleteUser';
import EditUser from './components/EditUser';
import LastAddedUser from './components/LastAddedUser';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<PostDetails/>}/>
        <Route path='/read' element={<LastAddedUser/>}/>
        <Route path='/allUsers' element={<GetUser/>}/>
        <Route path='/delete' element={<DeleteUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </Router>
  )
}

export default App
