var React = require('react');
var Message = require('./Message.jsx');
var Button = require('./Button.jsx');

var MessageContainer = React.createClass({  
  getInitialState: function () {
    return {
      isLiked: false
    };
  },

  toggleLike: function () {
    this.setState({
      isLiked: ! this.state.isLiked
    });
  },

  render: function () {
    var messageText = 'Now you know how React.js components interact with each other.';
    var buttonText = this.state.isLiked ? 'Unlike' : 'Like';

    return (
      <div className="message">
        <Message text={messageText} isLiked={this.state.isLiked} />
        <Button text={buttonText} onClick={this.toggleLike} />
      </div>
    );
  }
});

module.exports = MessageContainer;
