import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Post } from '../../models/posts.model';

export interface PostsState extends EntityState<Post> {
  count: number
}

export const postsAdaptor = createEntityAdapter<Post>();

export const initialState: PostsState = postsAdaptor.getInitialState({
  count: 0
});

export const postsAdapter = createEntityAdapter<Post>({
  sortComparer: sortByName
});

export function sortByName(a: Post, b: Post) {
  const compare = a.title.localeCompare(b.title);

  if (compare > 0) return -1;

  if (compare < 0) return 1;

  return compare;
}
