import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { PostItem } from '../../model/post-item.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PostItemService extends EntityCollectionServiceBase<PostItem> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('PostItem', serviceElementsFactory)
  }
}
