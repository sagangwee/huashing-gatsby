import React from "react";
import Img from "gatsby-image"
import Layout from "../components/layout/Layout"

const imgStyle = {
  width: "auto",
  top: "initial",
  left: "0",
  right: "0",
  bottom: "0",
  margin: "auto",
}

const wrapperStyle = {
  maxHeight: "70px",
}

const paymentMethods = [
  "check",
  "mastercard",
  "visa"
]

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

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default class Finances extends React.Component {
  constructor() {
    super()
    this.renderPaymentImage = this.renderPaymentImage.bind(this)
    this.renderInsuranceLogo = this.renderInsuranceLogo.bind(this)
  }

  renderPaymentImage(paymentMethod) {
    return(
      <li key={paymentMethod}>
        <Img
          alt={paymentMethod}
          imgStyle={imgStyle}
          style={wrapperStyle}
          fluid={this.props.data[paymentMethod].childImageSharp.fluid} />
        <div>{capitalize(paymentMethod)}</div>
      </li>
    )
  }

  renderInsuranceLogo(company) {
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
    const paymentImages = paymentMethods.map(this.renderPaymentImage)
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
              	<ul>{paymentImages}</ul>
              </div>
            </div>

            <div className="finance-section">
              <h2 className="center-text">Accepted Insurance Plans</h2>
              <div className="insurance">
              	<ul>{insuranceLogos}</ul>
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
`
