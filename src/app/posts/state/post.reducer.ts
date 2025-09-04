import { Action, createReducer, on } from "@ngrx/store";
import { initialState, PostsState } from "./post.state";
import { addPostSuccess, deletePostById, loadPostsSuccess, updatePost, updatePostSuccess } from "./post.actions";



const _postsReducers = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    let post = { ...action.post };
    return {
      ...state,
      posts: [...state.posts, post]
    }
  }),
  on(updatePostSuccess, (state, action) => {
    const updatedPosts = state.posts.map(post => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPosts
    }
  }),
  on(deletePostById, (state, action) => {
    return {
      ...state,
      posts: state.posts
    }
  }),
  on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts
    }
  })
);


export function postsReducer(state: PostsState | undefined, action: Action) {
  return _postsReducers(state, action);
}
