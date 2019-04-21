var MessageView = {

  render: _.template(`
      <div class="chat">
        <div id="username" class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `),
  
  renderFriend: _.template(`
      <div class="chat friend">
        <div id="username" class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `)
};

// <%= text %>
// 