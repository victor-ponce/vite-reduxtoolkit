import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export interface UserState {
  user: any
  token: any
  loading: boolean
}

let initialState: UserState = {
  user:'',
  token:'',
  loading: false
}

export const loginUser = createAsyncThunk('user', async(body)=>{
  let res = await fetch('http://104.215.249.5:5000/api/login', {
    method: 'post',
    headers:{
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body:JSON.stringify(body)
  })
  return await res.json();
})

export const authSlice = createSlice({
  name:'user',
  initialState,
  reducers: {
    addToken:(state, action)=>{
      state.token = localStorage.getItem('token')
    },
    addUser:(state, action)=>{
      state.user = localStorage.getItem('user')
    }
  },
extraReducers: {
  [ loginUser.pending]:(state: { loading: boolean }, action: any) => {
    state.loading = true
  },
  [ loginUser.fulfilled]:(state: {
    loading: boolean; token: any; user: any 
}, {payload: {user, token}}: any) => {
    state.loading = false
    state.token = token;
    state.user = user
    localStorage.setItem('token', JSON.stringify(token))
    localStorage.setItem('user', JSON.stringify(user))
  },
  [ loginUser.rejected]:(state: { loading: boolean }, action: any) => {
    state.loading = true
  }
}
})

export const { addToken, addUser} = authSlice.actions;
export default authSlice.reducer;
