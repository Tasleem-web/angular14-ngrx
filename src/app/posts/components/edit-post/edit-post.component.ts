import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { updatePost } from '../../state/post.actions';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { getPostById } from '../../state/post.selector';
import { Post } from 'src/app/models/posts.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {

  updatePostForm!: FormGroup;
  post!: Post;
  viewPostOnly: boolean = false;
  postSubscription!: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formCreation();
    this.viewPostOnly = this.router.url.includes('view');
    this.postSubscription = this.store.select(getPostById).subscribe(post => {
      if (post) {
        this.post = post;
        this.updatePostForm.patchValue({
          title: post.title,
          description: post.description
        })
      }
    })

    if (this.viewPostOnly) this.updatePostForm.disable()
  }

  formCreation() {
    this.updatePostForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    })
  }

  onUpdateFormSubmit() {
    const post: Post = {
      id: this.post.id,
      title: this.updatePostForm.value.title,
      description: this.updatePostForm.value.description
    }
    this.store.dispatch(updatePost({ post }));
  }

  ngOnDestroy(): void {
    if (this.postSubscription) this.postSubscription.unsubscribe()
  }

}
