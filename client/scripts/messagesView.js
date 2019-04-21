var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // console.log((MessageView.render));
    // App.fetch(MessageView.render(Messages));
    // MessagesView.render();
  },
  
  renderMessage: function(results) {
    $('#chats').empty();
    results.forEach(message => {
      if (message.username === undefined) { message.username = 'anon'; }
      if (message.text === undefined) { message.text = ''; }
      console.log(Object.values(Friends.storage).includes(message.username))
      if (Object.values(Friends.storage).includes(message.username)) {
        //console.log(Messages.friend);
        $('#chats').append(MessageView.renderFriend(message));
      } else {
        $('#chats').append(MessageView.render(message));
      }
    });
  }
};