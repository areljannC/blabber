import { takeLatest, put, call } from 'redux-saga/effects'
import { fetchPosts, fetchPostsStart, fetchPostsError, fetchPostsSuccess } from './FeedSlice'

const fetchPostsFromAPI = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()
  return posts
}

function* fetchPostsSaga() {
  yield put(fetchPostsStart())
  try {
    const posts = yield call(fetchPostsFromAPI)
    yield put(fetchPostsSuccess(posts))
  } catch (error) {
    yield put(fetchPostsError(error.message))
  }
}

export function* watchFetchPostsSaga() {
  yield takeLatest(fetchPosts.type, fetchPostsSaga)
}
