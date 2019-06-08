var Rooms = {
  initialize: function() {
    //loop through availableRooms object
    //append each to select <option>

    //add initialize to app.js
  },

  availableRooms: [],

  getRooms: function(obj) {
    if (!Rooms.availableRooms.includes(obj.roomname) && obj.roomname !== undefined) {
      Rooms.availableRooms.push(obj.roomname);
    }
    return Rooms.getAvailableRooms;
  }
};
