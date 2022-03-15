// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="navbar container">
      <a href="#!" className="logo">
        Mo'<span>Food</span>
      </a>
      <div className="nav-links">
        <a href="!#">Home</a>
        <a href="!#">Recipes</a>
        <a href="!#">Settings</a>
      </div>
      <div className="sidebar-btn active">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}
    </div>
  );
}
