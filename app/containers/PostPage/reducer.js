/*
 *
 * PostPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, LOAD_POSTS_SUCCESS, LOAD_POSTS } from './constants';

export const initialState = [];

/* eslint-disable default-case, no-param-reassign */
const postPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    console.log(action.type);
    switch (action.type) {
      case LOAD_POSTS_SUCCESS:
        console.log('reducer');
        return action.payload;
      case LOAD_POSTS:
        console.log('LOAD_POSTS - reducer');
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default postPageReducer;
