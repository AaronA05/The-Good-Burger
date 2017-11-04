$(function(){
	console.log("Func Success");
	
	$("#burger-button").on("click", function(event){
		event.preventDefault();
		var newBurger = $("#burger-input").val().trim();
		
		$.ajax({
			url: "/burgers/create",
			method: "POST", 
			data: {
				burger: newBurger
			}

		}).then(function(data){
			location.reload();
		})
	});

	$(".change-burger").on("click", function(event){
		event.preventDefault();
		var burgerID = $(this).attr("id");
		console.log(burgerID);

		$.ajax({
			url: "/burgers/update",
			method: "POST",
			data: {
				id: burgerID
			}

		}).then(function(data){
			location.reload();
		})
	});






});
