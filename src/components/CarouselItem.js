import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import '../styles/CarouselItem.scss';

export default class CarouselItem extends Component {
  static propTypes = {
    onMouseDown: PropTypes.func,
    onTouchStart: PropTypes.func,
    clickable: PropTypes.bool,
    children: PropTypes.node,
    width: PropTypes.number,
    index: PropTypes.number,
    currentSlideIndex: PropTypes.number,
    slidesPerPage: PropTypes.number,
  };
  render() {
    return (
      <li
        className={classname(
          'BrainhubCarouselItem',
          {
            'BrainhubCarouselItem--clickable': this.props.clickable,
            'BrainhubCarouselItem--center': this.props.index === this.props.currentSlideIndex,
            'BrainhubCarouselItem--active':
            this.props.index >= (this.props.currentSlideIndex - this.props.slidesPerPage/2)
            && this.props.index <= (this.props.currentSlideIndex + this.props.slidesPerPage/2),
          }
        )}
        style={{
          width: `${this.props.width}px`,
          maxWidth: `${this.props.width}px`,
          minWidth: `${this.props.width}px`,
        }}
        onMouseDown={this.props.onMouseDown}
        onTouchStart={this.props.onTouchStart}
      >
        {this.props.children}
      </li>
    );
  }
}
