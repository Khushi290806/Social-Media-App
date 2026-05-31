import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  likePost: () => {},
  deletePost: () => {},
  setInitialPosts: () => {},
});
