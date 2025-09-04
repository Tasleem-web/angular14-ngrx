import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/post.reducer';
import { POSTS_FEATURE_KEY } from './state/post.selector';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './state/post.effects';


@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    StoreModule.forFeature(POSTS_FEATURE_KEY, postsReducer),
    EffectsModule.forFeature([PostEffects])
  ]
})
export class PostsModule { }
