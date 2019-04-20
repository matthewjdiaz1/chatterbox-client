var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$form.on('')
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //console.log(document.getElementById('message').value);
    
    MessagesView.renderMessage(document.getElementById('message').value);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};