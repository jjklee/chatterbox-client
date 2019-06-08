var Rooms = {

  availableRoomsObj: {},

  getRooms: function(obj) {
    if (!Rooms.availableRoomsObj[obj.roomname] && obj.roomname !== undefined) {
      Rooms.availableRoomsObj[obj.roomname] = obj.roomname;
    }
    return Rooms.getAvailableRoomsObj;
    // console.log(Rooms.availableRoomsObj);
  },

  addRoomsToSelection: function () {
    var allRooms = App.getAllRooms();
    for (var key in allRooms) {
      //append to select
      var option = Rooms.render(allRooms);
      $('#selectRooms').append(option);
    }
    //when adding new room re-initialize the drop down bar?
  },

  render:  _.template(`
   <option class="roomname"><%- roomname %></option>
  `)
};
