import React from "react";
import SiteMap from "./SiteMap";

export default class Footer extends React.Component {
  render() {

    const footerStyle = {
      borderColor: "#dedede",
      backgroundColor: "white",
      borderTop: "1px solid",
      padding: "2em 0 2em 0",
      marginTop: "2em"
    };
    const navListClasses = ["nav-list"];

    return (
      <footer className="footer" style={footerStyle}>
        <SiteMap
          navListClasses={navListClasses}
          treatmentsClass={"footer-invisible"}
          financesClass={"footer-invisible"}
          testimonialsClass={"footer-invisible"} />
        <div className="footer-address">
          <div>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            10630 N 71st PL Suite 1 Scottsdale, AZ 85254
          </div>
          <div>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            4025 W Chandler Blvd Suite 3, Chandler, AZ 85226
          </div>
        </div>
        <div className="footer-phone">
          <i className="fa fa-phone" aria-hidden="true"></i>
          (480) 951-5785
        </div>
        <p>Copyright &copy; Huashing Acupuncture 2017</p>
      </footer>
    );
  }
}
