import React from "react";
import Img from "gatsby-image"
import Layout from "../components/layout/Layout"

export default class Finances extends React.Component {
  constructor() {
    super()
    this.renderInsuranceLogo = this.renderInsuranceLogo.bind(this);
  }

  renderInsuranceLogo(company) {
    const imgStyle = {
      width: "auto",
      top: "initial",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
    };

    const wrapperStyle = {
      maxHeight: "70px",
    }
    return(
      <li key={company}>
        <Img
          alt={company}
          imgStyle={imgStyle}
          style={wrapperStyle}
          fluid={this.props.data[company].childImageSharp.fluid} />
      </li>
    )
  }

  render() {
    const imgStyle = {
      width: "auto",
      top: "initial",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
    };

    const wrapperStyle = {
      maxHeight: "70px",
    }
    const insuranceCompanies = [
      "aetna",
      "amerigroup",
      "amerihealth",
      "anthem",
      "beechStreet",
      "blue",
      "cigna",
      "empire",
      "firstChoiceHealth",
      "greatWest",
      "healthNet",
      "horizon",
      "humana",
      "oxford",
      "triwest",
      "united",
      "wellpoint"
    ]
    const insuranceLogos = insuranceCompanies.map(this.renderInsuranceLogo)

    return (
      <Layout location={this.props.location}>
        <div>
          <h1 className="page-title">Finances</h1>

          <div>
            <div className="finance-section">
              <h2 className="center-text">Average Cost per Session </h2>
              <div className="price"><span>$60 - $200</span></div>
            </div>

            <div className="finance-section">
              <h2 className="center-text">Accepted Payment Methods</h2>
              <div className="payment-methods center-text">
              	<ul>
      	        	<li>
                    <Img
                      alt="Check"
                      imgStyle={imgStyle}
                      style={wrapperStyle}
                      fluid={this.props.data.check.childImageSharp.fluid} />
      					    <div>Check</div>
      	        	</li>

      	        	<li>
      	        		<Img
                      alt="Mastercard"
                      imgStyle={imgStyle}
                      style={wrapperStyle}
                      fluid={this.props.data.mastercard.childImageSharp.fluid} />
      	        		<div>Mastercard</div>
      	        	</li>

      	        	<li>
      	        		<Img
                      alt="Visa"
                      imgStyle={imgStyle}
                      style={wrapperStyle}
                      fluid={this.props.data.visa.childImageSharp.fluid} />
      	        		<div>Visa</div>
      				    </li>
    	        	</ul>
              </div>
            </div>

            <div className="finance-section">
              <h2 className="center-text">Accepted Insurance Plans</h2>
              <div className="insurance">
              	<ul>
                  {insuranceLogos}
              	</ul>
              </div>
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    check: file(relativePath: { eq: "check.jpg" }) {
      ...fluidImage
    }
    mastercard: file(relativePath: { eq: "mastercard.png" }) {
      ...fluidImage
    }
    visa: file(relativePath: { eq: "visa.png" }) {
      ...fluidImage
    }
    aetna: file(relativePath: { eq: "insurance/aetna.png" }) {
      ...fluidImage
    }
    amerigroup: file(relativePath: { eq: "insurance/amerigroup.png" }) {
      ...fluidImage
    }
    amerihealth: file(relativePath: { eq: "insurance/amerihealth.png" }) {
      ...fluidImage
    }
    anthem: file(relativePath: { eq: "insurance/anthem.jpg" }) {
      ...fluidImage
    }
    beechStreet: file(relativePath: { eq: "insurance/beech-street.png" }) {
      ...fluidImage
    }
    blue: file(relativePath: { eq: "insurance/blue.png" }) {
      ...fluidImage
    }
    cigna: file(relativePath: { eq: "insurance/cigna.jpg" }) {
      ...fluidImage
    }
    empire: file(relativePath: { eq: "insurance/empire.jpg" }) {
      ...fluidImage
    }
    firstChoiceHealth: file(relativePath: { eq: "insurance/first-choice-health.png" }) {
      ...fluidImage
    }
    greatWest: file(relativePath: { eq: "insurance/great-west.png" }) {
      ...fluidImage
    }
    healthNet: file(relativePath: { eq: "insurance/health-net.png" }) {
      ...fluidImage
    }
    horizon: file(relativePath: { eq: "insurance/horizon.png" }) {
      ...fluidImage
    }
    humana: file(relativePath: { eq: "insurance/humana.png" }) {
      ...fluidImage
    }
    oxford: file(relativePath: { eq: "insurance/oxford.png" }) {
      ...fluidImage
    }
    triwest: file(relativePath: { eq: "insurance/triwest.jpg" }) {
      ...fluidImage
    }
    united: file(relativePath: { eq: "insurance/united.jpg" }) {
      ...fluidImage
    }
    wellpoint: file(relativePath: { eq: "insurance/wellpoint.png" }) {
      ...fluidImage
    }

  }
`

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxHeight: 70) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;
