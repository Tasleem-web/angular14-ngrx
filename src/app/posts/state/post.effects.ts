import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { PostService } from "src/app/services/posts.service";
import { AppState } from "src/app/state/app.state";
import { addPost, addPostData, addPostSuccess, deletePostById, deletePostSuccess, loadPosts, loadPostsSuccess, UPDATE_POST_ACTION, updatePost, updatePostSuccess } from "./post.actions";
import { map, merge, mergeMap, of, retry, switchMap } from "rxjs";
import { setLoadingState } from "src/app/state/shared.actions";

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private store: Store<AppState>,
  ) { }

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap((action) => {
        this.store.dispatch(setLoadingState({ status: true }));
        return this.postService.getPosts()
          .pipe(
            map(post => {
              this.store.dispatch(setLoadingState({ status: false }));
              return loadPostsSuccess({ posts: post });
            })
          )
      })
    )
  });


  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPostData),
      mergeMap((action) => {
        this.store.dispatch(setLoadingState({ status: true }));
        return this.postService.addPost(action.post)
          .pipe(
            map(data => {
              const postData = { ...action.post, id: data.name };
              this.store.dispatch(setLoadingState({ status: false }));
              return addPostSuccess({ post: postData });
            })
          )
      })
    )
  })

  updatedPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        this.store.dispatch(setLoadingState({ status: true }));
        return this.postService.updatePost(action.post)
          .pipe(
            map(data => {
              this.store.dispatch(setLoadingState({ status: false }));
              return updatePostSuccess({ post: action.post })
            })
          )
      })
    )
  }, { dispatch: false })

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePostById),
      mergeMap(action => {
        this.store.dispatch(setLoadingState({ status: true }));
        return this.postService.deletePostById(action.postId)
          .pipe(
            map(data => {
              this.store.dispatch(setLoadingState({ status: false }));
              return deletePostSuccess({ postId: action.postId })
            })
          )
      })
    )
  })
}
