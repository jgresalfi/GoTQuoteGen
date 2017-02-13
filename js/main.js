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
                  "X-Mashape-Key": "9zwFYYC4i1msh2sU64WFOsp524C9p1woBdkjsnZwD7WKQR3vzj",
                  "Content-type": "application/json; charset=utf-8",
                  "dataType": "json",
                  "data": "data",
                  'Accept': 'application/json'
              }
          }
          $.getJSON(settings).done(function(response) {
                  twitLink = "https://twitter.com/intent/tweet?text=" + response.quote;
                  $(".quote").hide().html("<h2>" + response.quote + "</h2>").fadeIn(1000);
                  $(".author").hide().html("<h3>" + " - " + response.author + "</h3>").fadeIn(1000);
                  $("#tweet").hide().html('<a href="' + twitLink + '" class="twitter-share-button" data-size="large">Tweet</a>').fadeIn(1000);
                  }); $(".btn-grp").animate({ top: "35vh" }, 650); setInterval(function() {
                  $("#btn").css("position", "relative").delay(3000).animate({ "left": -6 }, 85)
                      .animate({ "left": 0 }, 10)
                      .animate({ "left": 6 }, 85)
                      .animate({ "left": 0 }, 10);
              }, 0);
          }); $("#tweet").on("click", "button", function() {
          window.open(twitLink, 'newwindow', 'width=300, height=250');
      });
  });
