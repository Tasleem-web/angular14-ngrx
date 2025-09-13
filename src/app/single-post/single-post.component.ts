import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Post } from '../models/posts.model';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { getPostById } from '../posts/state/post.selector';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post!: Observable<Post>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.post = this.store.select(getPostById).pipe(
      filter((post): post is Post => post != null && post != undefined)
    );

  }

}
