import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      // marginTop: "60px"
    };
    return (
      <div>
        <Header/>
        <Nav pathname={location.pathname} />

        <div
          className={location.pathname === "/" ? "" : "container"}
          style={containerStyle}>
          {this.props.children}
        </div>
        <Footer/>
      </div>

    );
  }
}
