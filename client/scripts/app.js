var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    MessagesView.initialize();
    RoomsView.initialize();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {

      // examine the response from the server request:
      //to display messages
      for (let i = 0; i < data.results.length; i++) {
        //messagesView.renderMessage
        var mssg = data.results[i];
        callback(mssg);
      }
      
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  addRoom: function(roomname) {
    if (!Rooms[roomname]) {
      var newOption = '<option>' + roomname + '</option>';
      $('#selectRooms').append(newOption);
      Messages.username = App.username;
      Messages.text = text || 'none';
      Messages.roomname = roomname;
      Parse.create(Messages);
    } else {
      alert('Room already exist.');
    }
  },

  addMessage: function(text) {
    Messages.username = App.username;
    Messages.text = text || 'none';
    Messages.roomname = $('#selectRooms option:selected').val() || 'Default';

    Parse.create(Messages);
    MessagesView.renderMessage(Messages);

    //when adding a new message in a room, room switches back to default;
  },

};
