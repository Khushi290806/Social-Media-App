import { createElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import App from "./App";
import { createPostAction } from "./create-post-action";
import { postLoader } from "./post-loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(App),
    children: [
      {
        index: true,
        element: createElement(PostList),
        loader: postLoader,
      },
      {
        path: "create-post",
        element: createElement(CreatePost),
        action: createPostAction,
      },
    ],
  },
]);

export default router;
