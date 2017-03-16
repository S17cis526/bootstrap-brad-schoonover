var displayMessage = function(message, type){
  var html = '<div id="javascriptMessage" class="alert fade show alert-dismissable alert-' + type + '"><button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button>  <span class="h4">' + message + ' </span></div>';
  $('#message').append(html);
  setTimeout(function() {
  	$("#javascriptMessage").alert('close');
  }, 3000);
};

$( document ).ready(function(){
  $('#show_message').on('click', function(){
    displayMessage("This is a problem!", "danger");
  })

  if($('#message_flash').length){
    var message = $('#message_flash').val();
    var type = $('#message_type_flash').val();
    displayMessage(message, type);
  }
});
