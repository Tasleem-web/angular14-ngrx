import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const ADD_POST_ACTION = '[POST post] Add Post';
export const UPDATE_POST_ACTION = '[POST post] Update Post';
export const UPDATE_POST_SUCCESS = '[POST post] Update Post';
export const DELETE_POST_ACTION = '[POST post] Delete Post';

// API Calls
export const LOAD_POSTS = '[POST post] Load Posts';
export const LOAD_POSTS_SUCCESS = '[POST post] Load Posts Success';
export const ADD_POST = '[POST page] Add post';
export const ADD_POST_SUCCESS = '[POST page] post added successfully.';
export const DELETE_POST = '[POST page] deleting post';
export const DELETE_POST_SUCCESS = '[POST page] deleted post';


export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const updatePost = createAction(UPDATE_POST_ACTION, props<{ post: Post }>());
export const updatePostSuccess = createAction(UPDATE_POST_ACTION, props<{ post: Post }>());
// export const deletePostById = createAction(DELETE_POST_ACTION, props<{ postId: number }>());

// API Calls
export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS, props<{ posts: Post[] }>());

export const addPostData = createAction(ADD_POST, props<{ post: Post }>());
export const addPostSuccess = createAction(ADD_POST_SUCCESS, props<{ post: Post }>());

export const deletePostById = createAction(DELETE_POST, props<{ postId: string }>());
export const deletePostSuccess = createAction(DELETE_POST_SUCCESS, props<{ postId: string }>());
