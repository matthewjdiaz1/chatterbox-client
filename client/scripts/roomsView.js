var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  

  initialize: function() {
    for (const key in Rooms) {
      // console.log('test');
      this.$select.append(new Option(key, Rooms[key]));
    }
  },

  render: function() {
    
  },

  renderRoom: function(room) {
    // for (var i = 0; i < Object.keys(Rooms).length; i++) {
    //   Rooms[room] = i;  
    // }
    
    this.$select.append(new Option(room, Rooms[room]));
  }
};
