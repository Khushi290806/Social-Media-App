import { useCallback, useState } from "react";
import { PostList } from "./post-list-context";
import {
  deletePostRequest,
  likePostRequest,
} from "../lib/posts-api";

const normalizePost = (post) => {
  let reactions = 0;

  if (typeof post.reactions === "number") {
    reactions = post.reactions;
  } else if (typeof post.likes === "number") {
    reactions = post.likes;
  } else if (post.reactions && typeof post.reactions === "object") {
    reactions =
      (Number(post.reactions.likes) || 0) +
      (Number(post.reactions.dislikes) || 0);
  }

  return {
    ...post,
    _id: post._id,
    reactions,
    tags: Array.isArray(post.tags) ? post.tags : [],
  };
};

const PostListProvider = ({ children }) => {
  const [postList, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((currentPosts) => [normalizePost(post), ...currentPosts]);
  };

  const setInitialPosts = useCallback((posts) => {
    setPosts(posts.map(normalizePost));
  }, []);

  const likePost = useCallback(async (postId) => {
    const updatedPost = await likePostRequest(postId);

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? normalizePost(updatedPost) : post,
      ),
    );
  }, []);

  const deletePost = useCallback(async (postId) => {
    await deletePostRequest(postId);

    setPosts((currentPosts) =>
      currentPosts.filter((post) => post._id !== postId),
    );
  }, []);

  return (
    <PostList.Provider
      value={{ postList, addPost, likePost, deletePost, setInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
