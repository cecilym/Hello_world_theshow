$(document).ready(function() {
  $('.char').hover(function() {
    var charPicked = $(this).attr('id');
    console.log(charPicked);
    $('#middleChar span').text(charPicked);
  });
});
