var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.getMessages();
  },

  getMessages: function() {
    App.fetch(MessagesView.renderMessage);
  },

  renderMessage: function(message) {
    if (!message.username) {
      message.username = 'anonymous';
    }
    if (!message.text ) {
      message.text = 'none';
    } 
    if (!message.roomname || message.roomname === '' || message.roomname === null) {
      message.roomname = 'Default';
    } else if (typeof(message.roomname) === 'string') {
      message.roomname = message.roomname.trim();
    }

    if (message.roomname === 'Default') {
      var node = MessageView.render(message);
      $('#chats').append(node);
    }
  },

  addMessage: function(text) {
    $('#chats').empty();
    Messages.username = App.username;
    Messages.text = text || 'none';
    Messages.roomname = $('#selectRooms option:selected').val() || 'Default';
    Parse.create(Messages);
    // MessagesView.renderMessage(Messages);

    var node = MessageView.render(message);
    $('#chats').append(node);
  },

};