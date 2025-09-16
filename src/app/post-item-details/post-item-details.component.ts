import { Component, OnInit } from '@angular/core';
import { PostItemService } from './components/services/post-item-service';
import { Observable } from 'rxjs';
import { PostItem } from './model/post-item.model';

@Component({
  selector: 'app-post-item-details',
  templateUrl: './post-item-details.component.html',
  styleUrls: ['./post-item-details.component.scss']
})
export class PostItemDetailsComponent implements OnInit {

  posts$!: Observable<PostItem[]>
  constructor(
    private PostItemService: PostItemService
  ) { }

  ngOnInit(): void {
    console.log('PostItemDetailsComponent ngOnInit');
    // this.posts$ = this.PostItemService.getAll();
    this.posts$ = this.PostItemService.entities$;
  }

  deletePost(event: Event, id: string | undefined) {
    if (id) {
      let userConfirmation = confirm("Are you sure you want to delete?");
      if (userConfirmation) {
        this.PostItemService.delete(id)
      }
    }
  }

}
