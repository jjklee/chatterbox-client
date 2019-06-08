var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    // Rooms.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      console.log(data);
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
    return Rooms.availableRoomsObj;
  },

  addRoom: function(roomname) {
    //currentRooms currently returning undefined;
    // this.getAllRooms();
    var currentRooms = this.getAllRooms();
    if (!currentRooms[roomname]) {
      //add new roomname to availableRoomsObj
      //create new template;
      var newOption = '<option>' + roomname + '</option>';
      $('#selectRooms').append(newOption);

      Messages.roomname = roomname;
      Parse.create(Messages);
      // RoomsView.renderRoom();
      //push newroomName into Rooms.availableRooms ? being able to post requests will auto;
    } else {
      alert('Room already exist.');
    }
  },

  // addRoomsToSelection: function() {
  //   //doesn't get a
  //   this.getAllRooms();
  //   var allRooms = Rooms.availableRooms;
  //   console.log(allRooms);
  //   debugger;
  //   for (let i = 0; i < Rooms.availableRooms.length; i++) {
  //     //append to select
  //     var option = _.template(`
  //       <option><%- objectproperty %></option>
  //   `);
  //     $('#selectRooms').append(option);
  //   }
  // },

  addMessage: function(text) {
    Messages.username = App.username || 'Anonymous';
    Messages.text = text || 'none';
    Messages.roomname = '';

    Parse.create(Messages);
    MessagesView.renderMessage(Messages);

  }
};
