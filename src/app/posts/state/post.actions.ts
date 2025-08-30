import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const ADD_POST_ACTION = '[POST post] Add Post';
export const UPDATE_POST_ACTION = '[POST post] Update Post';
export const DELETE_POST_ACTION = '[POST post] Delete Post';


export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());

export const updatePost = createAction(UPDATE_POST_ACTION, props<{ post: Post }>());

export const deletePostById = createAction(DELETE_POST_ACTION, props<{ postId: number }>());
