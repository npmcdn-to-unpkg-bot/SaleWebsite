$(document).ready(function() {
  init();
});

function init() {
  $('#imageUploadURL').show();
  $('#imageUploadFile').hide();
}

$('input[name=uploadOption]:radio').change(function(e) {
  if (e.target.value == 1) {
    $('#imageUploadURL').show();
    $('#imageUploadFile').hide();
    $('#imageUploadLabel').text("Image URL");
  } else if (e.target.value == 2) {
    $('#imageUploadURL').hide();
    $('#imageUploadFile').show();
    $('#imageUploadLabel').text("Image File");
  }
});
