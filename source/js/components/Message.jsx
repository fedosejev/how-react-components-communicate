var React = require('react');

var Message = function statelessFunctionComponentClass(props) {
  var iconImagePath = './images/';
  iconImagePath = iconImagePath + (props.isLoved ? 'loved.png' : 'not-loved.png');

  return (
    <span>
      <img src={iconImagePath} alt="Love status" />
      <span className="message-text">{props.text}</span>
    </span>
  );
};

module.exports = Message;
