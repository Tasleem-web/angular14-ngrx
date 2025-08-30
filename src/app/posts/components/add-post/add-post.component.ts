import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../../state/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(
    private Store: Store<AppState>
  ) { }

  postForm!: FormGroup;

  ngOnInit(): void {
    this.formCreation();
  }

  formCreation() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    })
  }

  onFormSubmit() {
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }

    this.Store.dispatch(addPost({ post }));
  }

}
