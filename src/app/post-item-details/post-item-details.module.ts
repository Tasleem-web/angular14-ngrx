import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostItemDetailsRoutingModule } from './post-item-details-routing.module';
import { PostItemDetailsComponent } from './post-item-details.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SingleItemPostComponent } from './components/single-item-post/single-item-post.component';
import { PostItemService } from './components/services/post-item-service';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { PostItemEntityDataService } from './components/services/post-item-entity-data.service';
import { PostItemResolver } from './components/guards/post-item.resolver';
import { entityMetaData } from '../store/post-item-entity-metadata';


@NgModule({
  declarations: [
    PostItemDetailsComponent,
    PostListItemComponent,
    SingleItemPostComponent,
  ],
  imports: [
    CommonModule,
    PostItemDetailsRoutingModule
  ],
  providers: [PostItemService, PostItemResolver]
})
export class PostItemDetailsModule {

  constructor(
    postItemEntityDataService: EntityDataService,
    postItemService: PostItemEntityDataService,
    eds: EntityDefinitionService
  ) {
    eds.registerMetadataMap(entityMetaData);
    postItemEntityDataService.registerService('PostItem', postItemService);
  }
}
