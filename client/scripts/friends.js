var Friends = {
  storage: {},
  toggleStatus: function(username) {
    // $('#chats').find('.username').trigger('click');
    console.log(username);
    if (!Object.values(Friends.storage).includes(username)) {
      Friends.storage[Object.values(Friends.storage).length] = username;
    }
  }

};