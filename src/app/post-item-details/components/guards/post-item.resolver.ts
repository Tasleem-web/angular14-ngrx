import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, map, mergeMap, Observable, of } from "rxjs";
import { PostItemService } from "../services/post-item-service";

@Injectable()
export class PostItemResolver implements Resolve<boolean> {
  constructor(private postItemService: PostItemService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.postItemService.loaded$.pipe(
      mergeMap(loaded => {
        if (loaded) return of(true);
        else {
          return this.postItemService.getAll().pipe(map(post => !!post));
        }
      }),
      first()
    )
  }
}

// return this.postItemService.loaded$.pipe(
//       tab((loaded) => {
//         if(!loaded) return this.postItemService.getAll();
//       })
//       first()
//     )
