/*
 *
 * PostPage actions
 *
 */

import { DEFAULT_ACTION, LOAD_POSTS_SUCCESS, LOAD_POSTS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadPostsSuccess(postPage) {
  console.log('postPage', postPage);
  return {
    type: LOAD_POSTS_SUCCESS,
    payload: postPage,
  };
}

export function loadPosts() {
  return {
    type: LOAD_POSTS,
  };
}
