import { useContext, useEffect } from "react";
import PostCard from "./PostCard";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";
import { PostList as PostListContext } from "../store/post-list-context";

const PostList = () => {
  const loadedPosts = useLoaderData();
  const { postList, setInitialPosts } = useContext(PostListContext);

  useEffect(() => {
    setInitialPosts(loadedPosts);
  }, [loadedPosts, setInitialPosts]);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      <div className="posts-grid">
        {postList.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
