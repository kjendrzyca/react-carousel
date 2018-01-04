import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import '../styles/CarouselItem.scss';

export default class CarouselItem extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    width: PropTypes.number,
  };
  render() {
    return (
      <li
        className={classname('BrainhubCarouselItem', { 'BrainhubCarouselItem--clickable': this.props.onClick })}
        style={{ width: `${this.props.width}px` }}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </li>
    );
  }
}