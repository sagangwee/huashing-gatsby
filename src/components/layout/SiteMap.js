import React from "react";
import { Link } from "gatsby"

const SiteMap = function (props) {
  const {
  	navListClasses,
    homeClass,
    aboutClass,
    treatmentsClass,
    testimonialsClass,
    financesClass,
    contactClass,
    onClick
  } = props;

  return (
    <ul class={navListClasses.join(' ')}>
      <li class={"nav-item " + homeClass}>
        <Link to="/" onClick={onClick}>Home</Link>
      </li>
      <li class={"nav-item " + aboutClass}>
        <Link to="/about" onClick={onClick}>About</Link>
      </li>
      <li class={"nav-item " + treatmentsClass}>
        <Link to="/treatments" onClick={onClick}>Treatments</Link>
      </li>
      <li class={"nav-item " + testimonialsClass}>
        <Link to="/testimonials" onClick={onClick}>Testimonials</Link>
      </li>
      <li class={"nav-item " + financesClass}>
        <Link to="/finances" onClick={onClick}>Prices</Link>
      </li>
      <li class={"nav-item " + contactClass}>
        <Link to="/contact" onClick={onClick}>Contact</Link>
      </li>
    </ul>
  );
};

export default SiteMap;
