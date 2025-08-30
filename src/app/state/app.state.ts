import { employeeReducer } from "../employee/state/employee.reducer";
import { EmployeeState } from "../employee/state/employee.state";
import { postsReducer } from "../posts/state/post.reducer";
import { PostsState } from "../posts/state/post.state";

export interface AppState {
  employee: EmployeeState;
  posts: PostsState
}


export const appReducer = {
  employee: employeeReducer,
  posts: postsReducer
}
