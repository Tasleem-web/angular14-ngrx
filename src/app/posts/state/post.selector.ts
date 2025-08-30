import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { PostsState } from "./post.state";

export const POSTS_FEATURE_KEY = 'posts';

export const getPostsState = createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

export const getPosts = createSelector(getPostsState, (state) => state.posts);

export const getPostById = (id: number) => createSelector(getPostsState, state => {
  return state.posts.find(post => post.id && +post.id === id);
});
