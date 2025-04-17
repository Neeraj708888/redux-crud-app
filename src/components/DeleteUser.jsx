import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, deleteUserData } from '../slices/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const DeleteUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUserData(id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-white text-xl font-semibold mb-4 border p-3 rounded-xl hover:bg-gray-800"
      >
        ← Go Back
      </button>

      <h2 className="text-center text-white text-3xl font-bold mb-6">
        Delete Users
      </h2>

      {loading ? (
        <p className="text-white text-center">Loading users...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : users && users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-xl shadow-lg p-5 space-y-2 text-gray-800 relative"
            >
              <h3 className="text-xl font-semibold text-blue-700">{user.name}</h3>
              <p><span className="font-medium">Email:</span> {user.email}</p>
              <p><span className="font-medium">Age:</span> {user.age}</p>
              <p><span className="font-medium">Mobile:</span> {user.mobile}</p>
              <p><span className="font-medium">Gender:</span> {user.gender}</p>

              <button
                onClick={() => handleDelete(user.id)}
                className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white text-center">No users available to delete.</p>
      )}
    </div>
  );
};

export default DeleteUser;
