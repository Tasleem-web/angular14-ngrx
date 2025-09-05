import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { PostsState } from "./post.state";
import { getCurrentRoute } from "src/app/state/router/router.selector";

export const POSTS_FEATURE_KEY = 'posts';

export const getPostsState = createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

export const getPosts = createSelector(getPostsState, (state) => state.posts);

// export const getPostById = (id: string) => createSelector(getPostsState, state => {
//   return state.posts.find(post => post.id && post.id === id);
// });

export const getPostById = createSelector(
  getPosts,
  getCurrentRoute,
  (posts, route: any) => {
    console.log("posts", posts)
    console.log("route", route)
    const postId = route ? route['params']['id'] : null;
    return posts ? posts.find(post => post.id === postId) : null;
  }
);
