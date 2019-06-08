var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      // console.log(data);
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

  displayMessages: function() {
    this.fetch(MessagesView.renderMessage);
  },

  // enterRoom: function() {
  //   this.fetch(RoomsView.renderRoom);
  //   //fetch messages in a certain room

  // },

  getAllRooms: function() {
    App.fetch(Rooms.getRooms);
  },

  addRoom: function(roomname) {
    //currentRooms currently returning undefined;
    this.getAllRooms();
    var currentRooms = Rooms.availableRooms;

    if (!currentRooms.includes(roomname)) {
      var newOption = '<option>' + roomname + '</option>';
      $('#selectRooms').append(newOption);
      //push newroomName into Rooms.availableRooms ? being able to post requests will auto;
    }
  },

  addMessage: function (text) {
    
    Messages
  }
};
