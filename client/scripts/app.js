var App = {

  $spinner: $('.spinner img'),

  username: 'guccifer2.0',

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
      Messages.messages = data;
      for (var i = 0; i < data.results.length; i++) {
        MessagesView.renderMessage(data.results[i]);
      }
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

