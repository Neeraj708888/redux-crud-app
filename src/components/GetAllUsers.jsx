import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserData, getUserData } from '../slices/userDetailsSlice';
import { useNavigate } from 'react-router-dom';
import ViewUsers from './ViewUsers';

const UserDetails = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error, search } = useSelector((state) => state.user);

  const [selectedUser, setSelectedUser] = useState(null)  // holds the clicked user

  // implement the searching functionality
  // const filterUserData = users.filter((user)=> {
  //   user.name.toLowerCase().includes(search.toLowerCase())
  // })


  useEffect(() => {

    dispatch(getUserData()); // ✅ Corrected: now we're calling the thunk

  }, [dispatch]);


  // ✅ delete user handler
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      dispatch(deleteUserData(id));
    }
    // if (confirmDelete) {
    //   dispatch(deleteUserData(id)).then(() => {
    //     dispatch(getUserData()); // Refresh after deletion
    //   });
    // }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <button onClick={() => navigate(-1)} className='text-center font-bold text-white text-xl mb-6 border rounded-2xl p-2 mt-2 justify-center items-center justify-items-center hover:text-teal-500 transition'> Go Back</button>
      <div className='grid grid-cols-2 items-center justify-center mb-4  gap-2' >
      </div>

      {loading ? (
        <p className="text-white text-center">Loading users...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {
            users && users.map((user) => (
              <div key={user.id}
                className="bg-white rounded-xl shadow-lg p-5 space-y-2 text-gray-800">
                <h3 className="text-xl font-semibold text-blue-700">{user.name}</h3>
                <p><span className="font-medium">Email:</span> {user.email}</p>
                <p><span className="font-medium">Age:</span> {user.age}</p>
                <p><span className="font-medium">Mobile:</span> {user.mobile}</p>
                <p><span className="font-medium">Gender:</span> {user.gender}</p>
                <div className='grid grid-cols-3 justify-center items-center gap-2'>

                  <button className = "bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600" onClick={()=> setSelectedUser(user)}>View</button>

                  <button className= "bg-blue-500 text-white px-4 py-1 rounded hover:bg-green-600" onClick={()=> navigate(`/edit/${user.id}`)}>Edit</button>

                  <button className= "bg-red-500 text-white px-4 py-1 rounded hover:bg-green-600" onClick={()=> handleDelete(user.id)}>Delete</button>
                </div>
              </div>
            ))
          }
        </div>
      )}

      {selectedUser && (
        <ViewUsers user = {selectedUser} onClose={()=> setSelectedUser(null)}/>
      )}
    </div>
  );
}

export default UserDetails;
