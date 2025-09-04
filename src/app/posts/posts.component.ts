import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { getPosts } from './state/post.selector';
import { Observable } from 'rxjs';
import { Post } from '../models/posts.model';
import { deletePostById, loadPosts } from './state/post.actions';
import { setLoadingState } from '../state/shared.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$!: Observable<Post[]>;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts)
    this.store.dispatch(loadPosts());
  }

  deletePost(postId: any) {
    if (postId) {
      this.store.dispatch(setLoadingState({ status: true }));
      this.store.dispatch(deletePostById({ postId }));

    }
  }

}
