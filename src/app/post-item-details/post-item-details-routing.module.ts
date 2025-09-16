import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostItemDetailsComponent } from './post-item-details.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { AddItemPostComponent } from './components/add-item-post/add-item-post.component';
import { SingleItemPostComponent } from './components/single-item-post/single-item-post.component';
import { PostItemResolver } from './components/guards/post-item.resolver';

const routes: Routes = [
  { path: '', component: PostItemDetailsComponent, resolve: { posts: PostItemResolver } },
  { path: '', redirectTo: 'post-item', pathMatch: 'full' },
  { path: 'post-item', component: PostListItemComponent },
  { path: 'post-item/add', component: AddItemPostComponent },
  { path: 'post-item/edit/:id', component: AddItemPostComponent },
  { path: 'post-item/view/:id', component: AddItemPostComponent },
  { path: 'post-item/details/:id', component: SingleItemPostComponent, resolve: { posts: PostItemResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostItemDetailsRoutingModule { }
