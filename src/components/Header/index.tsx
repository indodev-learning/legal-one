import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => (
  <div className="header" data-testid="divHeader">
    <div className="wrapper flex-between">
      <div className="logo">Legal One</div>
      <div className="menu">
        <Link to="/">Home</Link>
      </div>
    </div>
  </div>
);

export default Header;
