import React from "react";
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default class Header extends React.Component {
  render() {
    const headerSize = 12;
    return (
      <header>
        <div className="header-address">
          <div>
            <FaMapMarkerAlt className="header-icon" size={headerSize}/>
            10630 N 71st PL Suite 1 Scottsdale, AZ 85254
          </div>
          <div>
            <FaMapMarkerAlt className="header-icon" size={headerSize}/>
            4025 W Chandler Blvd Suite 3, Chandler, AZ 85226
          </div>
        </div>
        <div className="header-title">
          <h1> Huashing Acupuncture </h1>
          <h1> & </h1>
          <h1> Chinese Medicine </h1>
        </div>
        <div className="header-phone">
          <FaPhone className="header-icon" size={headerSize}/>
          (480) 951-5785
        </div>
      </header>
    );
  }
}
