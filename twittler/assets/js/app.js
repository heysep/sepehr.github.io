$(document).ready(function(){
  window.visitor = 'el visitante';
  var $container = $('.container');

  var $refreshTweets = $('<a href="#" class="refreshTweets"></a>');
  $refreshTweets.text('Refresh Tweets');
  $container.prepend($refreshTweets);

  var $input = $('<input class="status" placeholder="What\'s happening?">');
  $container.prepend($input);

  var $image = $('<a href="#"><img src="assets/logo.png" class="logo"></a>');
  $container.prepend($image);

  var $feed = $('<div class="feed"></div>');
  $container.append($feed);

  var showTweets = function(username) {
    var stream = username ? streams.users[username] : streams.home;

    $feed.html('');
    var index = stream.length - 1;
    while (index >= 0) {
      var tweet = stream[index];
      var timeCreated = moment(tweet.created_at).fromNow();

      var $user = $('<a href="#"></a>');
      $user.attr({'data-user': tweet.user, class: 'username'});
      $user.text('@' + tweet.user);

      var $tweet = $('<div></div>');
      $tweet.append($user);
      $tweet.append(': ' + tweet.message);

      var $time = $('<span class="time"></span>');
      $time.text(' ' + timeCreated);
      $tweet.append($time);

      $feed.append($tweet);
      index --;
    }

    $('.username').on('click', function() {
      showTweets($(this).data('user'));
    });

  };

  var refreshTweets = function(event) {
    event.preventDefault();
    showTweets();
  };

  showTweets();

  $('.refreshTweets').on('click', refreshTweets);
  $('.logo').on('click', refreshTweets);

  $('.status').keypress(function (event) {
    var key = event.which;
    if(key === 13) {
      writeTweet($(this).val());
      showTweets();
      return false;
    }
  });   

});
