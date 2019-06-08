var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    App.displayMessages();
  },
  
  renderMessage: function(message) {
    console.log(message);
    if (message.username === undefined) {
      message.username = 'Anonymous';
    } 
    if (message.text === undefined) {
      message.text = '';
    }
    var node = MessageView.render(message);
    $('#chats').prepend(node);
  }

};