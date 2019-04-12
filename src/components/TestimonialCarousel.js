import React from "react";
import { CSSTransitionGroup } from 'react-transition-group'

export default class TestimonialCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  componentDidMount() {
    setTimeout( () => {
      this.updateTestimonial();
    }, 5000);
  }

  updateTestimonial() {
    if (this.state.currentIndex >= this.props.testimonials.length - 1) {
      this.setState({
        currentIndex: 0
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
    setTimeout( () => {
      this.updateTestimonial();
    }, 5000);
  }

  render() {
    const { testimonials } = this.props;
    const { currentIndex } = this.state;
    const testimonial = testimonials[currentIndex];

    return (
      <div>
        <CSSTransitionGroup
          transitionName="bounceInUp"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeave={false}>
          <div class="testimonial-carousel" key={testimonial}>
            "{testimonial}"
          </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}
