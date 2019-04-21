var App = {

  $spinner: $('.spinner img'),
  username: null,
  currentRoom: null,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    //RoomsView.$select.append(`<option value="test">test</option>`);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      
      // logging messages
      Messages = data;
      Messages.results.forEach(message =>{
        message.friend = false;
      });
      
      // show all messages
      MessagesView.renderMessage(Messages.results);
      // for (var i = 0; i < data.results.length; i++) {
      //   MessagesView.renderMessage(data.results[i]);
      // }
      
      // log all room names
      data.results.forEach(message => {
        // if not undefined, and if not currently in Rooms
        if (message.roomname && !Object.values(Rooms).includes(message.roomname)) {
          Rooms[Object.keys(Rooms).length] = message.roomname;
        }
      });
      
      App.currentRoom = Rooms[0];
      // show rooms in selector
      Object.values(Rooms).forEach(room =>{
        RoomsView.renderRoom(room);
      });
      
      callback();
    });
  },
  
  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

