import React from "react";
import ImageGallery from 'react-image-gallery';
import Button from "../components/Button";
import { Link } from "gatsby";
import { FaPhone } from 'react-icons/fa';
import TestimonialCarousel from "../components/TestimonialCarousel";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo";
import acupuncture from "../images/carousel/acupuncture-cc-650.jpg";
import tcm from "../images/carousel/tcm-cc-650.jpg";
import huashing from "../images/huawang.jpg";

export default class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      descriptionClasses: "fadeInLeft",
      subheadingClasses: "subheading fadeInRight",
    };
    this.handleSlide = this.handleSlide.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    const backgroundUrl = item.original;
    const itemStyle = {
      backgroundImage: "url(" + backgroundUrl + ")"
    }

    return (
      <div className='image-gallery-image'>
        <div style={itemStyle} />
        {
          item.description &&
            <span className='image-gallery-description'>
              <div className='image-gallery-description-inner'>
                <div className={this.state.descriptionClasses}>{item.description}</div>
                <div className={this.state.subheadingClasses}>{item.subHeading}</div>
              </div>
            </span>
        }
      </div>
    )
  }

  handleSlide(currentIndex) {
    if (currentIndex === 0) {
      this.setState({
        descriptionClasses: "",
        subheadingClasses: ""
      });
      setTimeout(() => {
        this.setState({
          descriptionClasses: "fadeInLeft",
          subheadingClasses: "subheading fadeInRight"
        });
      }, 1);
    } else {
      this.setState({
        descriptionClasses: ""
      });
      setTimeout(() => {
        this.setState({
          descriptionClasses: "fadeInRight"
        });
      }, 1);
    }
  }

  render() {
    const images = [
      {
        original: acupuncture,
        description: 'Acupuncture',
        subHeading: 'Healing & Wellness'
      },
      {
        original: tcm,
        description: 'Traditional Chinese Medicine'
      }
    ]

    const testimonials =
      this.props.data.allContentfulHomeTestimonial.edges.map(({ node }) =>
        node.testimonialText.testimonialText
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`home`, `acupuncture`, 'arizona', `traditional`, 'chinese', 'medicine']} />
        <div>
          <ImageGallery
            ref={i => this._imageGallery = i}
            items={images}
            autoPlay={true}
            onSlide={this.handleSlide}
            renderItem={this.renderItem}
            showBullets={true}
            showFullscreenButton={false}
            showThumbnails={false}
            slideInterval={4000} />

          <section class="info-section">
            <h2>Acupuncture</h2>
            <p>
              Acupuncture techniques involve stimulating specific points on the body using thin, stainless steel needles.
              These acupuncture points are located along numerous channels or pathways, where energy or Qi circulates in the body.
              Qi, thought to nourish internal organs and tissues, can alter neural impulses that travel through the body to elicit beneficial responses.
              By stimulating acupuncture points with specific functions and indications, acupuncturists are able to promote and balance the flow of Qi, relieve pain, reduce stress and restore health.
            </p>

            <h2>Traditional Chinese Medicine</h2>
            <p>
              Traditional Chinese Medicine (TCM) is rooted in the ancient philosophy of Taoism and dates back more than 2,500 years.
              Traditional Chinese Medicine encompasses many different practices, including acupuncture, moxibustion, Chinese herbal medicine, tui na, dietary therapy, tai chi and qigong.
              In the United States, some 10,000 practitioners serve more than 1 million patients each year.
            </p>

          </section>

          <section class="bio-section">
            <div class="bio-inner">
              <div class="huawang-wrapper">
                <h2>Meet the Expert</h2>
                <img alt="Huashing" src={huashing} class="huawang-home"/>
                <Link to="about" class="about-link">About Hua Wang</Link>
              </div>
              <div class="bio-summary">
                <p>Hua Wang is an expert in acupuncture and Traditional Chinese Medicine with over 20 years of experience.
                   She specializes in pain and stress management, with a focus in neck, shoulder, and back pain.
                </p>
                <div class="bio-button-container"><Button to="treatments">See All Treatments</Button></div>
              </div>
            </div>
          </section>

          <section class="testimonials-section">
            <h1>What Patients Are Saying</h1>
            <TestimonialCarousel testimonials={testimonials} />
          </section>

          <section class="appointment-section">
            <h1>Make an Appointment</h1>
            <div class="appointment-phone">
              <FaPhone size={20}/>
              (480) 951-5785
            </div>
            <div class="appointment-location">
              <div class="location">
                <h2> <a href="https://goo.gl/maps/DwMJ6Qn9e7M2">Location 1</a></h2>
                10630 N 71st PL <br/>
                Suite 1 <br/>
                Scottsdale, Arizona 85254
              </div>
              <div class="location">
                <h2> <a href="https://goo.gl/maps/55zSiPzWUF62">Location 2</a> </h2>
                4425E Agave Rd <br/>
                Suite 106 <br/>
                Phoenix, Arizona 85044
              </div>
            </div>
          </section>

        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    allContentfulHomeTestimonial {
      edges {
        node {
          testimonialText {
            testimonialText
          }
        }
      }
    }
  }
`
