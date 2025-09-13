import { Action, createReducer, on } from "@ngrx/store";
import { initialState, postsAdaptor, PostsState } from "./post.state";
import { addPostSuccess, deletePostById, loadPostsSuccess, updatePost, updatePostSuccess } from "./post.actions";



const _postsReducers = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    return postsAdaptor.addOne(action.post, { ...state, count: state.count + 1 });
  }),
  on(updatePostSuccess, (state, action) => {
    return postsAdaptor.updateOne(action.post, state);
  }),
  on(deletePostById, (state, action) => {
    return postsAdaptor.removeOne(action.postId, state);
  }),
  on(loadPostsSuccess, (state, action) => {
    return postsAdaptor.setAll(action.posts, { ...state, count: state.count + 1 });
  })
);

export function postsReducer(state: PostsState | undefined, action: Action) {
  return _postsReducers(state, action);
}
