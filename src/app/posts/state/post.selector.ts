import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { postsAdaptor, PostsState } from "./post.state";
import { getCurrentRoute } from "src/app/state/router/router.selector";

export const POSTS_FEATURE_KEY = 'posts';

export const getPostsState = createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

export const postsSelectors = postsAdaptor.getSelectors();

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);

export const getPostEntities = createSelector(getPostsState, postsSelectors.selectEntities); // memoize function

export const getPostById = createSelector(
  getPostEntities,
  getCurrentRoute,
  (posts, route: any) => {
    const postId = route ? route['params']['id'] : null;
    return posts ? posts[route.params['id']] : null;
  }
);

export const getCount = createSelector(getPostsState, state => state.count);
