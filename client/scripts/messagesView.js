var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    App.displayMessages();
    RoomsView.initialize();
  },
  
  renderMessage: function(message) {
    if (message.username === undefined) {
      message.username = 'Anonymous';
    } 
    if (message.text === undefined) {
      message.text = 'none';
    }
    var node = MessageView.render(message);
    $('#chats').append(node);
  }

};