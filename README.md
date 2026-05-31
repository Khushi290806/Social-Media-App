# Social Media App

SocialMediaApp is a full-stack post sharing app with a React frontend, React Router data APIs, and an Express/MongoDB backend.

## Features
- View posts loaded through React Router loaders.
- Create posts using React Router form actions.
- Add title, body, user ID, and hashtags.
- Like posts with backend persistence.
- Delete posts from the feed.
- Post state managed through React Context.
- Backend API with MongoDB post schema.
- Posts sorted by newest first.
- API fallback support for local `/api/posts` or standalone backend URL.
- Bootstrap and React Icons based UI.

## Tech Stack
React, Vite, React Router, Context API, Bootstrap, React Icons, Node.js, Express.js, MongoDB, Mongoose

## How to Run

1. Install dependencies:
   npm install
2. Create a .env file:
   MONGO_URI=your_mongodb_connection_string
3. Start the backend server:
   npm run server
4. In another terminal, start the React frontend:
   npm run dev
5. Open the Vite URL shown in the terminal, usually:
   http://localhost:5173
6. Backend API runs at:
   http://localhost:3001/posts
