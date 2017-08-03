// Check Off Specific Todos By Clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


// Deleting Todos
$("ul").on("click","span" , function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){

	if(event.which === 13){
		
		var todo = $(this).val();
		$(this).val("");

		$("ul").append("<li><span>X </span>" + todo + "</li>");


	}

});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});











	
		

