import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { PostList } from "../store/post-list-context";

const PostCard = ({ post }) => {
  const { likePost, deletePost } = useContext(PostList);
  const likeIcon = "\u2764\uFE0F";

  const handleLikeClick = () => {
    likePost(post._id);
  };

  const handleDeleteClick = () => {
    deletePost(post._id);
  };

  return (
    <div className="post-card">
      <h5>{post.title}</h5>
      <p>{post.body}</p>

      {/* Render tags as hashtag pills */}
      <div>
        {post.tags.map((tag) => (
          <span key={tag} className="hashtag">
            #{tag}
          </span>
        ))}
      </div>

      <div className="post-actions">
        <button type="button" className="action-btn" onClick={handleLikeClick}>
          {likeIcon} {post.reactions} Likes
        </button>
        <button type="button" className="action-btn" onClick={handleDeleteClick}>
          <FaTrashAlt /> Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
