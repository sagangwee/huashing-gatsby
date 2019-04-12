import React from "react";
import { Link } from "gatsby";

const Button = function (props) {
  const {
    children,
    to
  } = props;

  return (
    <Link to={ to } class="button">
      {children}
    </Link>
  );
};

export default Button;
