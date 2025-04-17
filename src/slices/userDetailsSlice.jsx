import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

// post data - it return the promises like pending, fulfilled, reject so we have to handle from extra reducer outside
export const postData = createAsyncThunk('postData', async (data) => {

    const response = await fetch('https://67ff70c358f18d7209f13244.mockapi.io/crud', {
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
export const getUserData = createAsyncThunk('users/fetch', async () => {
    const res = await fetch('https://67ff70c358f18d7209f13244.mockapi.io/crud');
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await res.json();
    return data; // should be an array of users
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
        // GET
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

        // POST
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
    }
    
});

export default userDetail.reducer;