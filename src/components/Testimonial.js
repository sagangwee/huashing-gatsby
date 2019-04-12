import React from "react";

export default class Testimonial extends React.Component {
  render() {
    const { text } = this.props;
    const { reviewer } = this.props;

    return (
      <div className="testimonial">
        <p>
          <em>"{text}"</em>
          <p className="reviewer">
            <strong>— { reviewer }</strong>
          </p>
        </p>
      </div>
    );
  }
}
