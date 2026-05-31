import { Form } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      {/* Basic author id field for demo purposes */}
      <div className="form-group">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="number"
          name="userId"
          className="form-input"
          id="userId"
          placeholder="Your User Id"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-input"
          id="title"
          placeholder="What's the headline..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          name="body"
          rows="4"
          className="form-input"
          id="body"
          placeholder="Tell us more about it"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-input"
          id="tags"
          name="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="primary-btn">
        Post
      </button>
    </Form>
  );
};

export default CreatePost;
