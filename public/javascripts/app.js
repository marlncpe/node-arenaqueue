(function() {
  //references to dom
  var btnEnter = $('#btn-enter');
  var btnLeave = $("#btn-leave");
  var imgLoading = $("#status img");
  
  //start the socket listener
  var socket = new io.Socket("localhost", {port: 3001});
  
  socket.on('message', function(response) {    
    if(response == 'onGameStart') {
      $("#main").hide('slow', function() {
        $("#game").show('fast');
      });
      
    }
    
    
  });
  
  //apply interface interaction
  btnEnter.click(function(evt) {
    $("#sound-prepare")[0].play();
    if(!imgLoading.hasClass('on')) {
      imgLoading.addClass('on');
    }
    socket.connect(); //connect to the queue system
  });
  
  
  
  btnLeave.click(function(evt) {
    
    socket.disconnect();
    
    imgLoading.removeClass('on');
    console.log("disconnected.");
  });
})();