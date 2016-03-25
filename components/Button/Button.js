import React from 'react';
import './Button.scss';

var Button = React.createClass({
  render: function() {
    return <a className="Button" href={this.props.link}>
      <span>{this.props.value}</span>
    </a>
  }
});

export default Button;
