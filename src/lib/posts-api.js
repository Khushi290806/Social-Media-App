const POSTS_ENDPOINTS = ["/api/posts", "http://localhost:3001/posts"];

async function requestPostsApi(path = "", options = {}) {
  for (const baseUrl of POSTS_ENDPOINTS) {
    const endpoint = `${baseUrl}${path}`;

    try {
      const response = await fetch(endpoint, options);

      if (!response.ok) {
        continue;
      }

      if (response.status === 204) {
        return null;
      }

      const data = await response.json();
      return data.post ?? data.posts ?? data;
    } catch {
      // Try the next available endpoint.
    }
  }

  throw new Response("Posts API is unavailable", { status: 503 });
}

export function fetchPosts() {
  return requestPostsApi();
}

export function createPost(postData) {
  return requestPostsApi("", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
}

export function likePostRequest(postId) {
  return requestPostsApi(`/${postId}/like`, {
    method: "PATCH",
  });
}

export function deletePostRequest(postId) {
  return requestPostsApi(`/${postId}`, {
    method: "DELETE",
  });
}
