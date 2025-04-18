import React from 'react';

const ViewUsers = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-red-600"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">User Details</h2>
        <div className="space-y-2 text-gray-800">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Phone:</strong> {user.mobile}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
