import React, { useState } from 'react'
import { postData } from '../slices/userDetailsSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PostDetails = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    // const data = useSelector();

    const getUserData = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
        console.log(user);
        
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(user);
        
        dispatch(postData(user))
        navigate('/read');
    }

   
  return (
    <div className='min-hight-screen bg-gray-800 flex items-center justify-center p-4'>
        <form onSubmit={handleSubmit} className='min-w-1/6 max-w-2xl bg-white rounded-xl shadow-md p-6 space-y-6'>
            <fieldset className='border border-gray-300 rounded-md p-4'>
                <legend className='text-lg font-semibold text-gray-700 px-2'>Name</legend>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <input 
                        name='name'
                        onChange={getUserData}
                        type="text" 
                        placeholder='enter-name'
                        className='w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black' />
                    </div>
            </fieldset>
            <fieldset className='border border-gray-300 rounded-md p-4'>
                <legend className='text-lg font-semibold text-gray-700 px-2'>Email</legend>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <input 
                        name='email'
                        onChange={getUserData}
                        type="text" 
                        placeholder='enter-name'
                        className='w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black' />
                    </div>
            </fieldset>
            <fieldset className='border border-gray-300 rounded-md p-4'>
                <legend className='text-lg font-semibold text-gray-700 px-2'>Age</legend>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <input 
                        name='age'
                        onChange={getUserData}
                        type="text" 
                        placeholder='enter-name'
                        className='w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black' />
                    </div>
            </fieldset>
            <fieldset className='border border-gray-300 rounded-md p-4'>
                <legend className='text-lg font-semibold text-gray-700 px-2'>Mobile</legend>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <input 
                        name='mobile'
                        onChange={getUserData}
                        type="text" 
                        placeholder='enter-name'
                        className='w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black' />
                    </div>
            </fieldset>

            {/* Add Address */}
            <fieldset className='border border-gray-300 rounded-md p-4'>
                <legend className='text-lg font-semibold text-gray-700 px-2'>Address</legend>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <input 
                        name='address'
                        onChange={getUserData}
                        type="text" 
                        placeholder='enter-name'
                        className='w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black' />
                    </div>
            </fieldset>

            {/* add gender */}
            <fieldset className='border border-gray-300 rounded-md p-4'>
          <legend className='text-lg font-semibold text-gray-700 px-2'>Gender</legend>
          <div className='flex gap-8 mt-4 text-gray-700'>
            <label className='flex items-center gap-2'>
              <input onChange={getUserData} type="radio" name="gender" value="male" className="accent-blue-600" />
              Male
            </label>
            <label className='flex items-center gap-2'>
              <input onChange={getUserData} type="radio" name="gender" value="female" className="accent-pink-600" />
              Female
            </label>
          </div>
        </fieldset>

        {/* Here we have a button */}
            <div className='text-right'>
                <button
                type='submit' 
                className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default PostDetails
