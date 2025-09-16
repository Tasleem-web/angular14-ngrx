import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostItem } from '../../model/post-item.model';
import { PostItemService } from '../services/post-item-service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-item-post',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-item-post.component.html',
  styleUrls: ['./add-item-post.component.scss']
})
export class AddItemPostComponent implements OnInit {
  postForm!: FormGroup;
  editPost: boolean = false;
  viewPost: boolean = false;
  id!: string;

  constructor(
    private formBuilder: FormBuilder,
    private postItemService: PostItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formCreation();
    const url = this.router.url;
    console.log(url)
    if (url.includes('edit')) this.editPost = true;
    else this.editPost = false;

    if (url.includes('view')) this.viewPost = true;
    else this.viewPost = false;

    this.id = this.route.snapshot.params['id'];
    this.postItemService.entities$.subscribe(posts => {
      const postData = posts.find(post => post.id === this.id);
      if (!postData) this.router.navigate(['post-item-detail'])
      this.postForm.patchValue({
        title: postData?.title,
        description: postData?.description
      })

      if (this.viewPost) {
        this.postForm.disable();
      }
    })
  }

  formCreation() {
    this.postForm = this.formBuilder.group({
      title: [],
      description: []
    })
  }

  submitPostForm() {
    const post: PostItem = { ...this.postForm.value, id: this.id };
    this.postItemService.update(post);
    this.router.navigate(['post-item-detail']);
  }

}
