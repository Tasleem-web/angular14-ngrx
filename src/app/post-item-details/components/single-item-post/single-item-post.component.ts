import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostItemService } from '../services/post-item-service';

@Component({
  selector: 'app-single-item-post',
  templateUrl: './single-item-post.component.html',
  styleUrls: ['./single-item-post.component.scss']
})
export class SingleItemPostComponent implements OnInit {

  title: string = ''
  description: string = ''
  id: string = ''

  constructor(
    private route: ActivatedRoute,
    private postItemService: PostItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.postItemService.entities$.subscribe(posts => {
      const postdata = posts.find(post => post.id === this.id);

      if (postdata) {
        this.title = postdata.title;
        this.description = postdata.description;
      }
    })
  }

}
