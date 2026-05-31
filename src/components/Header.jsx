import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-inner">
        <Link to="/" className="brand-link">
          FakeGram
        </Link>
        <nav className="header-nav">
          <NavLink to="/" className="header-nav-link">
            Home
          </NavLink>
          <NavLink to="/create-post" className="header-nav-link">
            Create Post
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
