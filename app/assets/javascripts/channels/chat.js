//= require cable
//= require_self
//= require_tree .

this.App = {};
App.cable = ActionCable.createConsumer();

App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    return $('#messages').append(this.renderMessage(data));
  },

  renderMessage: function(data) {
    return "<p>" + data.message + "</p>";
  }
});
