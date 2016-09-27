'use strict';

$(document).ready(function() {
	$("#btn").on("click", function() {
		$.getJSON("https://got-quotes.herokuapp.com/quotes", function(data) {
			$(".quote").html(data.quote);
			console.log("AJAX call: successful")
		})
	})
})