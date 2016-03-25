import React from 'react';
import Button from '../Button';
import './Landing.scss';

var Landing = React.createClass({

  render: function() {
      return <div className="Landing-Content">
        <h1 className="Landing-Header">Sara Frederixon</h1>
        <div className="Landing-Buttons">
          <Button value="Photographer" link="/about"/>
          <Button value="Developer" link="/blog"/>
        </div>
      </div>
  }
});

export default Landing;