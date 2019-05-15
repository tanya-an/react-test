import { call, put, takeLatest } from 'redux-saga/effects';
// import request from 'utils/request';
import { LOAD_POSTS } from './constants';
import { loadPostsSuccess } from './actions';

// import { repoLoadingError } from '../App/actions';

// Individual exports for testing
const api = url => fetch(url).then(response => response.json());

export function* postPageSaga() {
  try {
    const response = yield call(api, 'http://localhost:8080/posts');
    yield put(loadPostsSuccess(response));
  } catch (e) {
    yield console.log('ERROR', e);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* fetchPosts() {
  yield takeLatest(LOAD_POSTS, postPageSaga);
}
