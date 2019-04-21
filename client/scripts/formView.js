var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('.addRoomButton').on('click', FormView.handleAddRoom);
    $('.selectRoom').change(FormView.handleChangeRooms);
    $('body').click(FormView.handleAddFriends);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var newMessage = {
      username: App.username,
      text: event.currentTarget[0].value,
      roomname: App.currentRoom
    }
    event.preventDefault();
    Parse.create(newMessage);
    $('#chats').prepend(MessageView.render(newMessage));
  },
  
  handleAddRoom: function(event) {
    if (event.currentTarget.parentElement[0].value && !Rooms.hasOwnProperty(event.currentTarget.parentElement[0].value)) {
      Rooms[event.currentTarget.parentElement[0].value] = Object.keys(Rooms).length;;
      RoomsView.renderRoom(event.currentTarget.parentElement[0].value);
    }
  },
  
  handleChangeRooms: function(event) {
    var roomName = $(this).val();
    for (const key in Rooms) {
      if (Rooms[key] === roomName) { 
        App.currentRoom = Rooms[key];
      }
    }
  },
  
  handleAddFriends: function(event) {
    if (event.target.className === 'username'){
      Friends.toggleStatus(event.target.innerText);
      MessagesView.renderMessage(Messages.results);
    }
    // search body for .friend classname
    
    // if contains .friend, MessageView.renderFriend
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};