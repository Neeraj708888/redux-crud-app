import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

const api_url = 'https://67ff70c358f18d7209f13244.mockapi.io/crud';

// post data - it return the promises like pending, fulfilled, reject so we have to handle from extra reducer outside
export const postData = createAsyncThunk('postData', async (data) => {

    const response = await fetch(api_url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    try {
        const result = response.json();
        return result;
    } catch (error) {
        isRejectedWithValue(error);
    }
});

// get Data
// ✅ Thunk to fetch all users
export const getUserData = createAsyncThunk('users/getUserData', async () => {
    const res = await fetch(api_url);
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await res.json();
    return data; // should be an array of users
  });

  // Delete Data
  export const deleteUserData = createAsyncThunk('user/deleteUserData', async (id)=> {
    await fetch(`${api_url}/${id}`, {
        method: 'DELETE'
    });

    return id; // Return the id so that it can be removed from local state
  });
const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },

// here we are using extraReduces to handle the API Data
    extraReducers: (builder) => {
        // ------------------->>>>>   GET
        builder
        .addCase(getUserData.pending, (state)=> {
            state.loading = true;
        })
        .addCase(getUserData.fulfilled, (state, action)=> {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(getUserData.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.payload;
        });

        // --------------->>>>>>  POST
        // pending....
        builder.addCase(postData.pending, (state)=> {
            state.loading = true;
        })

        // fulfilled....
        .addCase(postData.fulfilled, (state, action)=> {
            state.loading = false;
            state.users.push(action.payload);
        })

        // rejected .....
        .addCase(postData.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.error.message;
            state.isRejectedWithValue(error);
        });

        // ---------------->>>>>>>>>>    DELETE
        // pending...
        builder
        .addCase(deleteUserData.pending, (state)=> {
            state.loading = true;
        })
        .addCase(deleteUserData.fulfilled, (state, action)=> {
            state.loading = false;
            state.users = state.users.filter(user => user.id !== action.payload);
        })
        .addCase(deleteUserData.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.error.message;
        });
    }
    
});

export default userDetail.reducer;