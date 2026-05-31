import { Link } from "react-router-dom";
import { FaHome, FaPlusCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar-title">
        FakeGram
      </Link>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          <FaHome /> Home
        </Link>
        <Link to="/create-post" className="sidebar-link">
          <FaPlusCircle /> Create Post
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
