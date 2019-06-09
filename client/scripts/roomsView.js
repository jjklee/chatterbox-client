var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //add roomnames from result object to Rooms.js
    Parse.readAll((data) => {
      for (let i = 0; i < data.results.length; i++) {
        if (!Rooms[data.results[i].roomname] && data.results[i].roomname !== undefined) {
          console.log('one', data.results[i].roomname);
          Rooms[data.results[i].roomname] = data.results[i].roomname;
        }
      }
      //append the roomnames from Rooms.js to select dropdown
      RoomsView.appendRooms(Rooms);
    }); 

  },

  appendRooms: function(Rooms) {
    for (var roomname in Rooms) {
      //fix to use template, render();
      // var option = RoomsView.render(Rooms);
      var option = `<option>${roomname}</option>`;
  
      $('#selectRooms').append(option);
    }
  },

  // render:  _.template(`
  //  <option><%- roomname %></option>
  // `)

  renderRoom: function(selectedRoom) {
    //grab all messages with the selectedRoom property value

    //display messages with roomname

    //hide all unrelated messages;
  }
};
