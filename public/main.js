var socket = io.connect('http://localhost:8080', { 'forceNew': true });

function addMessage(e) {
  var testjson;
  $.ajax({
    url: "test.json",
    dataType: 'json',
    async: false,
    success: function(strings) {
      testjson = strings;
    },
    error: function(){
      console.log("error");
    }
  });
  console.log("mosScore", testjson);


  socket.emit('new-message', testjson);
  return false;
}
