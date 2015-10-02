console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $('.add').change(function(){
   console.log("yay!");
   var left = parseInt($('#left').val());
   var right = parseInt($('#right').val());
   $('#total').val(left + right);
});

});
