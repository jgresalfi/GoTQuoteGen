'use strict';

$(document).ready(function() {
    var twitLink;
    $("#btn").on("click", function() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://andruxnet-random-famous-quotes.p.mashape.com/",
            "method": "POST",
            "headers": {
                "cache-control": "no-cache",
                "postman-token": "0bfbd25b-5b2a-60be-bfe5-efe940d10583",
                "X-Mashape-Key": "9zwFYYC4i1msh2sU64WFOsp524C9p1woBdkjsnZwD7WKQR3vzj",
                "Content-type": "application/json; charset=utf-8",
                "dataType": "json",
                "data": "data",
                'Accept': 'application/json'
            }
        }
        $.getJSON(settings).done(function(response) {
            twitLink = "https://twitter.com/home/?status=" + response.quote;
            $(".quote").html("<h2>" + response.quote + "</h2>");
            $(".author").html("<h3>" + " - " + response.author + "</h3>");
            $("#tweet").html('<button id="tweeter">Tweet this!</button>');
        });
    });
    $("#tweet").on("click", "button", function() {
        window.open(twitLink, 'newwindow', 'width=300, height=250');
    });
});
