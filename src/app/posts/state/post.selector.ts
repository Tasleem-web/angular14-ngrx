import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { PostsState } from "./post.state";
import { AppState } from "src/app/state/app.state";


export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => state.posts);

export const getPostById = (id: number) => createSelector(getPostsState, state => {
  return state.posts.find(post => post.id && +post.id === id);
});
