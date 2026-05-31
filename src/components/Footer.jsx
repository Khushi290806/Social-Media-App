import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <nav className="footer-nav">
        <Link to="/" className="footer-link">
          Home
        </Link>
        <Link to="/create-post" className="footer-link">
          Create Post
        </Link>
        <span className="footer-text">Feed</span>
        <span className="footer-text">Community</span>
      </nav>
      <p className="footer-copy">
        {"\u00A9"} {year} Social Feed
      </p>
    </footer>
  );
};

export default Footer;
