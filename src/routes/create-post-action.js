import { redirect } from "react-router-dom";
import { createPost } from "../lib/posts-api";

export async function createPostAction({ request }) {
  const formData = await request.formData();
  const postData = {
    userId: Number(formData.get("userId")),
    title: formData.get("title"),
    body: formData.get("body"),
    tags: String(formData.get("tags") ?? "")
      .split(" ")
      .map((tag) => tag.trim())
      .filter(Boolean),
  };

  await createPost(postData);

  return redirect("/");
}
