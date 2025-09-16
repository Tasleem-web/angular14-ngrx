import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { PostItem } from "../../model/post-item.model";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Update } from "@ngrx/entity";

@Injectable({
  providedIn: 'root'
})
export class PostItemEntityDataService extends DefaultDataService<PostItem> {
  constructor(
    public httpClient: HttpClient,
    override httpUrlGenerator: HttpUrlGenerator
  ) {
    super('Post', httpClient, httpUrlGenerator);
  }

  override getAll(): Observable<PostItem[]> {
    return this.httpClient
      .get<PostItem[]>('https://angular-http-call-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(data => {
        const posts: PostItem[] = [];
        for (const key in data) {
          if (data[key]) posts.push({ ...data[key], id: key });
        }
        return posts;
      }))
  }

  override add(post: PostItem): Observable<PostItem> {
    return this.httpClient
      .post<{ name: string }>('https://angular-http-call-default-rtdb.firebaseio.com/posts.json', post)
      .pipe(
        map(data => {
          return { ...post, id: data.name }
        })
      )
  }

  override update(post: Update<PostItem>): Observable<PostItem> {
    return this.httpClient
      .put<PostItem>(`https://angular-http-call-default-rtdb.firebaseio.com/posts/${post.id}.json`, { ...post.changes });
  }

  override delete(postId: string) {
    return this.http.delete(`https://angular-http-call-default-rtdb.firebaseio.com/posts/${postId}.json`)
      .pipe(map(data => {
        return postId;
      }))
  }
}
