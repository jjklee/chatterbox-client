var Rooms = {
  allRooms: {},

  add: function(roomname) {
    if (!Rooms.allRooms[roomname]) {
      var newOption = '<option>' + roomname + '</option>';
      $('#selectRooms').append(newOption);
      Messages.username = App.username;
      Messages.roomname = roomname;
      Parse.create(Messages);
    } else {
      alert('Room already exist.');
    }
  }
};
