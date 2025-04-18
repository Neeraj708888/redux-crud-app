import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, updateUserData } from '../slices/userDetailsSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: '',
    email: '',
    age: '',
    mobile: '',
    gender: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setInput(userToEdit);
    }
  }, [id, users]);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUserData());
    }
  }, [dispatch, users.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateUserData({ id, updatedUser: input }));
    dispatch(getUserData());  // to referesh udated user list
    navigate('/allUsers');
  };  
  

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-6 space-y-4 w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">Edit User</h2>

        <input
          type="text"
          name="name"
          value={input.name}
          placeholder="Name"
          className="w-full border rounded-md p-2 text-black"
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          value={input.email}
          placeholder="Email"
          className="w-full border rounded-md p-2 text-black"
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          value={input.age}
          placeholder="Age"
          className="w-full border rounded-md p-2 text-black"
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          value={input.mobile}
          placeholder="Phone"
          className="w-full border rounded-md p-2 text-black"
          onChange={handleChange}
        />

        <div className="flex gap-4 mt-2 text-gray-700">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={input.gender === 'male'}
              className="accent-pink-600"
              onChange={handleChange}
            />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={input.gender === 'female'}
              className="accent-pink-600"
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition cursor-pointer"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
