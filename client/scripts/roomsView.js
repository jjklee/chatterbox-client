var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.hasSameRoomname = [];
    //add roomnames from result object to Rooms.js
    Parse.readAll((data) => {
      for (let i = 0; i < data.results.length; i++) {
        if (!Rooms.allRooms[data.results[i].roomname] && data.results[i].roomname !== undefined ) {
          if (data.results[i].roomname !== '') {
            Rooms.allRooms[data.results[i].roomname] = data.results[i].roomname;
          }
        }
      }
      //append the roomnames from Rooms.js to select dropdown
      RoomsView.appendRooms();
    }); 

  },

  appendRooms: function() {
    for (var roomname in Rooms.allRooms) {
      //fix to use template, render();
      // var option = RoomsView.render(Rooms);
      var option = `<option>${roomname}</option>`;
      $('#rooms select').append(option);

      // $('#selectRooms').append(option);
    }
  },

  // render:  _.template(`
  //  <option><%- roomname %></option>
  // `)

  hasSameRoomname: [],

  findSameRoomname: function(selected) {
    RoomsView.hasSameRoomname = [];

    Parse.readAll((data) => {
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].roomname === selected) {
          RoomsView.hasSameRoomname.push(data.results[i]);
        }
      } 
      RoomsView.renderRoom();
    });
  },

  renderRoom: function() {
    for (let i = 0; i < RoomsView.hasSameRoomname.length; i++) {
      var mssgObj = RoomsView.hasSameRoomname[i];
      //MessagesView.renderMessage(mssgObj[i]);
      //fix to use template
      $('#chats').append(`
      <div class="chat">
        <div class="username">${mssgObj.username}</div>
        <div>${mssgObj.text}</div>
        <div>${mssgObj.roomname}</div>
      </div>
    `);
    }
  }

};
