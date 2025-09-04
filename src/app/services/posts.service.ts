import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Post } from "../models/posts.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post>('https://vue-completecourse.firebaseio.com/posts.json')
      .pipe(
        map((post: any) => {
          const posts: Post[] = [];
          for (const key in post) {
            if (post.hasOwnProperty(key)) {
              posts.push({ ...post[key], id: key })
            }
          }

          return posts;
        })
      )
  }

  addPost(post: Post): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(`https://vue-completecourse.firebaseio.com/posts.json`, post);
  }

  updatePost(post: Post) {
    if (!post.id) {
      throw new Error('Post ID is missing for the update operation.');
    }

    const postData = {
      [post.id]: { title: post.title, description: post.description }
    };

    return this.http.patch<{ name: string }>(`https://vue-completecourse.firebaseio.com/posts.json`, postData);
  }

  deletePostById(postId: string) {
    return this.http.delete(`https://vue-completecourse.firebaseio.com/posts/${postId}.json`);
  }

}
