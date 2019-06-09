var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.getMessages();
  },

  getMessages: function() {
    App.fetch(MessagesView.renderMessage);
  },

  renderMessage: function(selected) {
    if (!message.username) {
      message.username = 'anonymous';
    }
    if (!message.text) {
      message.text = 'none';
    }
    if (!message.roomname || message.roomname === '') {
      message.roomname = 'Default';
    }
    var node = MessageView.render(message);
    $('#chats').append(node);
  }

};