import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { PostService } from "src/app/services/posts.service";
import { AppState } from "src/app/state/app.state";
import { addPost, addPostData, addPostSuccess, deletePostById, deletePostSuccess, loadPosts, loadPostsSuccess, UPDATE_POST_ACTION, updatePost, updatePostSuccess } from "./post.actions";
import { filter, map, merge, mergeMap, of, retry, switchMap } from "rxjs";
import { setLoadingState } from "src/app/state/shared.actions";
import { ROUTER_NAVIGATED, RouterNavigatedAction, RouterNavigationAction } from "@ngrx/router-store";

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
        // this.store.dispatch(setLoadingState({ status: true }));
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

  singlePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      filter((router: RouterNavigatedAction) => {
        return router.payload.routerState.url.startsWith('/posts/details');
      }),
      map((r: RouterNavigatedAction) => {
        // Access params from firstChild if available, otherwise root
        const root = r.payload.routerState.root;
        const params = root && root.firstChild ? root.firstChild.params : root ? root.params : {};
        return params['id'];
      }),
      switchMap(id => {
        return this.postService.getPostById(id).pipe(
          map(post => {
            const postData = [{ ...post, id }];
            return loadPostsSuccess({ posts: postData })
          })
        )
      })

    )
  });
}
