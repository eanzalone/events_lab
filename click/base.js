console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$('span').click(function(e){
    console.log('Yes, this is working.');
    var itemText = $(this).text() + ' at ' + $.now();
    $("ul").append("<li>" + itemText + "</li>");
});

});
