import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../slices/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    
      dispatch(getUserData()); // ✅ Corrected: now we're calling the thunk
      navigate('/read');
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <button onClick={()=> navigate('/')} className='text-center font-bold text-white text-2xl mb-6 border rounded-2xl p-4 mt-2 justify-center items-center justify-items-center'> Go Back</button>
        <div className='grid grid-cols-2 items-center justify-center mb-4  gap-2' >
        <button onClick={()=> navigate('/read')} className='text-center font-bold text-white text-2xl mb-6 border rounded-2xl p-4 mt-2 justify-center items-center justify-items-center'>User Records</button>
        <button onClick={()=> navigate('/allUsers')} className='text-center font-bold text-white text-2xl mb-6 border rounded-2xl p-4 mt-2 justify-center items-center justify-items-center'>Show All users</button>
        </div>

      {loading ? (
        <p className="text-white text-center">Loading users...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users && users.length > 0 ? (
            users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-xl shadow-lg p-5 space-y-2 text-gray-800"
              >
                <h3 className="text-xl font-semibold text-blue-700">{user.name}</h3>
                <p><span className="font-medium">Email:</span> {user.email}</p>
                <p><span className="font-medium">Age:</span> {user.age}</p>
                <p><span className="font-medium">Mobile:</span> {user.mobile}</p>
                {/* <p><span className="font-medium">Address:</span> {user.address}</p> */}
                <p><span className="font-medium">Address:</span> {typeof user.address === 'object' ? JSON.stringify(user.address) : user.address}</p>

                <p><span className="font-medium">Gender:</span> {user.gender}</p>
              </div>
            ))
          ) : (
            <p className="text-white text-center col-span-full">No users found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default UserDetails;
