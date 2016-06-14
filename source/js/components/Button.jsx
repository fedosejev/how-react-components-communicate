var React = require('react');

var Button = function statelessFunctionComponentClass(props) {
  return (
    <button onClick={props.onClick} className="btn btn-xs btn-default">{props.text}</button>
  );
};

module.exports = Button;
