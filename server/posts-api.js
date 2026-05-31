import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

function normalizeTags(tags) {
  if (!Array.isArray(tags)) {
    return [];
  }

  return tags.map((tag) => String(tag).trim()).filter(Boolean);
}

function toClientPost(post) {
  const document = post.toObject ? post.toObject() : post;

  return {
    ...document,
    tags: normalizeTags(document.tags),
    reactions: Number(document.likes || 0),
  };
}

export async function getPosts() {
  const posts = await Post.find().sort({ createdAt: -1 });
  return posts.map(toClientPost);
}

export async function createPost(postData) {
  const createdPost = await Post.create({
    userId: Number(postData.userId),
    title: String(postData.title ?? "").trim(),
    body: String(postData.body ?? "").trim(),
    tags: normalizeTags(postData.tags),
  });

  return toClientPost(createdPost);
}

export async function deletePost(postId) {
  return Post.findByIdAndDelete(postId);
}

export async function likePost(postId) {
  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { $inc: { likes: 1 } },
    { new: true },
  );

  return updatedPost ? toClientPost(updatedPost) : null;
}
