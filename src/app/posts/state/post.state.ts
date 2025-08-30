import { Post } from '../../models/posts.model';

export interface PostsState {
  posts: Post[]
}


export const initialState: PostsState = {
  posts: [
    { id: '1', title: 'sample title 1', description: 'sample desc 1' },
    { id: '2', title: 'sample title 2', description: 'sample desc 2' }
  ]
}
