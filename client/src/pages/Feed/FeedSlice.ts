import { createSlice } from '@reduxjs/toolkit'

// Types and Interfaces
type StateType = {
  isLoading: boolean
  error: string
  posts: object[]
}

// Slice
const initialState: StateType = { isLoading: false, error: ``, posts: [] }

const feedSlice = createSlice({
  name: `Feed`,
  initialState,
  reducers: {
    fetchPosts: () => {},
    fetchPostsStart: (state) => {
      state.isLoading = true
    },
    fetchPostsError: {
      prepare: (error) => ({ payload: null, error: error, meta: null }),
      reducer: (state, action) => {
        state.isLoading = false
        state.error = action.error
      },
    },
    fetchPostsSuccess: {
      prepare: (posts) => ({ payload: posts, error: null, meta: null }),
      reducer: (state, action) => {
        state.isLoading = false
        state.error = ``
        state.posts = action.payload
      },
    },
  },
})

export const { fetchPosts, fetchPostsStart, fetchPostsError, fetchPostsSuccess } = feedSlice.actions
export default feedSlice.reducer
