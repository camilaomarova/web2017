var message = function(author, text){
	this.author = author;
	this.text = text;
}

var usersActions = {
  addNewUser: function(user){
    users = usersActions.getUsersList();
    users.push(user);
    usersActions.setUsersList(users);
  },

  setUsersList: function(list){
    space.set('users', list);
  },

  getUsersList: function(){
    return space.get('users') || [];
  },

  removeUser: function(user){
    var users = usersActions.getUsersList();
    var new_arr = []
    for (var i = 0; i < users.length; i++)
      if (users[i] != user)
        new_arr.push(users[i]);
    usersActions.setUsersList(new_arr);
  },

  includeUser: function(instance){
    var list = usersActions.getUsersList();
    for(var i = 0; i < list.length; i++){
      if( list[i] === instance)
        return true;
    }
    return false;
  },

  currentUser: undefined,
  currentFriend: undefined
}

var show = {
  createMessage: function(text, type){
    var secondClass = type || '' 
    var messageDiv =  $('<div class="message ' + secondClass + '">' + text + '</div>')
    $('.message-list').append(messageDiv);
  },
  
  setName: function(name){
    $('.user-name').html(name);
  },

  createContact: function(text){
     var contactBlock =  $('<div class="contact">' + text + '</div>')
     contactBlock.on('click', friendsKeeper.clickedOnFriend);
     $('.contact-list').append(contactBlock)
  }
}

var friendsKeeper = {
  init: function(){
    friendsKeeper.renderUserList();
    setInterval(function(){
      friendsKeeper.renderUserList();
    }, 2000);
  },

  renderUserList: function(){
    $('.contact').remove();

    users = usersActions.getUsersList();
    for(var i = 0; i < users.length; i++){
      if(users[i] != usersActions.currentUser)
        show.createContact(users[i]);
    }
  },

  clickedOnFriend: function(){
    $('.hidden').removeClass('hidden');
    var friendName = $(this).html();
    usersActions.currentFriend = friendName;
    
    
    chatManager.loadChat(usersActions.currentFriend, usersActions.currentUser);
  }
}

var chatManager = {
  
  loadChat: function(user, friend){
    if (!user || !friend)
      return false;

    var messages = chatManager.getChat(chatManager.getChatKey(user, friend));
    chatManager.renderMessages(messages);
  },

  renderMessages: function(messages){
    $('.no-messages').remove();
    $('.message').remove();
    for(var i = 0; i < messages.length; i++){
      var author = messages[i].author === usersActions.currentUser ? 'message-me' : 'message-friend';
      show.createMessage(messages[i].text, author);
    }
  },

  addMessage: function(user, friend, text){
    var mess = new message(user, text);
    var messArray = chatManager.getChat(chatManager.getChatKey(user, friend));

    messArray.push(mess);
    space.set(chatManager.getChatKey(user, friend), messArray);
  },

  getChat: function(chatKey){
    return space.get(chatKey) || [];
  },

  getChatKey(name1, name2){
    return [name1, name2].sort().join('-');
  },

  onSendMessage: function(){
    if (!usersActions.currentUser || !usersActions.currentFriend){
      alert("No friend selected!");
      return false;
    }

    var text = $('.messageSend').val();
    $('.messageSend').val('');
    
    chatManager.addMessage(usersActions.currentUser, usersActions.currentFriend, text);

    show.createMessage(text, 'message-me');
  },

  init: function(){
    setInterval(function(){
      chatManager.loadChat(usersActions.currentUser, usersActions.currentFriend);
    }, 1000);
  }
}

var space = {
  get: function(key){
    return JSON.parse(localStorage.getItem(key));
  },

  set: function(key, val){
    var tmp = JSON.stringify(val);
    localStorage.setItem(key, tmp);
  },

  remove: function(key){
    localStorage.removeItem(key);
  },

  clear: function(){
    localStorage.clear();
  }
};

$(document).ready(function(){
  // User initializing
  var name = prompt('What is your name?');
  while(usersActions.includeUser(name) || !name)
  name = prompt('What is your name?');
  usersActions.addNewUser(name);
  show.setName(name);
  usersActions.currentUser = name;

  friendsKeeper.init();
  chatManager.init();

  $('.message-butt').on('click', chatManager.onSendMessage);

  window.onbeforeunload = function() {
    usersActions.removeUser(usersActions.currentUser);
  };
});
