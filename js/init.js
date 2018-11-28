//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "27 dec 2018 23:59:59",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	