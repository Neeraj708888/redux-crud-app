import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../slices/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  // Get the last added user (assuming it's at the end of the array)
  // let lastUser = null;
  // if (users && users.length > 0) {
  //   lastUser = users[users.length - 1];
  // }
  const lastUser = users && users.length > 0 ? users[users.length - 1] : null;

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <button onClick={() => navigate(-1)} className='text-center font-bold text-white text-2xl mb-6 border rounded-2xl p-4 mt-2 justify-center items-center justify-items-center'> Go Back</button>
      <div className='grid grid-cols-2 items-center justify-center mb-4  gap-2' >
        <p className='text-center font-bold text-white text-2xl mb-6 border rounded-2xl p-4 mt-2 justify-center items-center justify-items-center'>User Records</p>
        <button onClick={() => navigate('/allUsers')} className='text-center font-bold text-white text-2xl mb-6 border rounded-2xl p-4 mt-2 justify-center items-center justify-items-center'>Show All users</button>
      </div>


      <h2 className='text-center font-bold text-white text-2xl mb-6'>Latest User Record</h2>

      {loading ? (
        <p className="text-white text-center">Loading user...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : lastUser ? (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-5 text-gray-800 space-y-3">
          <h3 className="text-xl font-semibold text-blue-700">{lastUser.name}</h3>
          <p><span className="font-medium">Email:</span> {lastUser.email}</p>
          <p><span className="font-medium">Age:</span> {lastUser.age}</p>
          <p><span className="font-medium">Mobile:</span> {lastUser.mobile}</p>
          <p><span className="font-medium">Gender:</span> {lastUser.gender}</p>
        </div>
      ) : (
        <p className="text-white text-center">No users found.</p>
      )}
    </div>
  );
}

export default UserDetails;
