import { fetchPosts } from "../lib/posts-api";

export function postLoader() {
  return fetchPosts();
}
