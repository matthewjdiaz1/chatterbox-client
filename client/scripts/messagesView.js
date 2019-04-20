var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // console.log((MessageView.render));
    // App.fetch(MessageView.render(Messages));
    // MessagesView.render();
  },
  render: function() {
  },
  renderMessage: function(message) {
    console.log(MessageView.render(message));
    //console.log(message);
    
    // TODO - escaping for username/text/etc.
    if (message.username !== undefined) { message.username = 'anon'; }
    if (!message.text) { message.text = 'null'; }
      $('#chats').append(MessageView.render(message));
    
  }
};