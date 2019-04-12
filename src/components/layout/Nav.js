import React from "react";
import SiteMap from "./SiteMap";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
      fixed: false,
      navActive: false
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    const navActive = !this.state.navActive;
    this.setState({collapsed, navActive});
  }

  componentDidMount() {
    console.log("add scroll listener");
    window.addEventListener('scroll', this.handleScroll.bind(this), true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this), true);
  }

  handleScroll(event) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop > 146.7) {
        this.setState({
          fixed: true
        });
      } else {
        this.setState({
          fixed: false
        });
      }
      console.log(scrollTop);
  }

  render() {
    const { pathname } = this.props;
    const {
      collapsed,
      fixed,
      navActive
    } = this.state;
    const homeClass = pathname === "/" ? "active" : ""; const aboutClass = pathname.match(/^\/about/) ? "active" : ""; const treatmentsClass = pathname.match(/^\/treatments/) ? "active" : "";
    const financesClass = pathname.match(/^\/finances/) ? "active" : "";
    const testimonialsClass = pathname.match(/^\/testimonials/) ? "active" : "";
    const contactClass = pathname.match(/^\/contact/) ? "active" : "";
    const navClasses = ["nav"];
    if (fixed) { navClasses.push('nav-fixed'); }
    const navMobileClasses = ["nav-mobile"];
    if (!collapsed) { navMobileClasses.push('nav-mobile-open'); }
    const navListClasses = ["nav-list"];
    if (navActive) { navListClasses.push('nav-active'); }

    return (
      <nav className={navClasses.join(' ')}>
        <div className={navMobileClasses.join(' ')} onClick={this.toggleCollapse.bind(this)}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <SiteMap
          navListClasses={navListClasses}
          homeClass={homeClass}
          aboutClass={aboutClass}
          treatmentsClass={treatmentsClass}
          financesClass={financesClass}
          testimonialsClass={testimonialsClass}
          contactClass={contactClass}
          onClick={this.toggleCollapse.bind(this)}/>
      </nav>
    );
  }
}
