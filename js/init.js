//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "20 feb 2019 23:59:59",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	