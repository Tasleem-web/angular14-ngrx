import { Action, createReducer, on } from "@ngrx/store";
import { initialState, PostsState } from "./post.state";
import { addPost, deletePostById, updatePost } from "./post.actions";



const _postsReducers = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post]
    }
  }),
  on(updatePost, (state, action) => {
    const updatedPosts = state.posts.map(post => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPosts
    }
  }),
  on(deletePostById, (state, action) => {

    const excludedPost = state.posts.filter(post => post.id && +post.id != action.postId) || [];
    return {
      ...state,
      posts: excludedPost
    }
  })
);


export function postsReducer(state: PostsState | undefined, action: Action) {
  return _postsReducers(state, action);
}
