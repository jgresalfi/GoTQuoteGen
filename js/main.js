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
            $(".quote").hide().html("<h2>" + response.quote + "</h2>").fadeIn(1000);
            $(".author").hide().html("<h3>" + " - " + response.author + "</h3>").fadeIn(1000);
            $("#tweet").hide().html('<button id="tweeter"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxMDI0IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB3aWR0aD0iMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48dGl0bGUvPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNDAyIiBpZD0iY2FudmFzX2JhY2tncm91bmQiIHdpZHRoPSI1ODIiIHg9Ii0xIiB5PSItMSIvPjwvZz48Zz48dGl0bGUvPjxnIGZpbGw9IiMwMDAwMDAiIGlkPSJzdmdfMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxMDI0KSBzY2FsZSgwLjEwMDAwMDAwMTQ5MDExNjEyLC0wLjEwMDAwMDAwMTQ5MDExNjEyKSAiPjxwYXRoIGQ9Im00ODU1LDk0MzljLTg4NCwtNTUgLTE3MzksLTM4NiAtMjQzMCwtOTQwYy02NTksLTUyOCAtMTE1MywtMTIzNyAtMTQxNCwtMjAyOWMtMzE4LC05NjMgLTI4NywtMjAxMCA4NiwtMjk2MGM2NCwtMTYzIDIxNywtNDcyIDMxMCwtNjI2YzM3NiwtNjIxIDg3NiwtMTEyMSAxNDk3LC0xNDk3YzE1NCwtOTMgNDY0LC0yNDYgNjI2LC0zMTBjMTAzNCwtNDA1IDIxNjYsLTQwNSAzMjAwLDBjMTYyLDY0IDQ3MiwyMTcgNjI2LDMxMGM2MjEsMzc2IDExMjEsODc2IDE0OTcsMTQ5N2M5MywxNTQgMjQ2LDQ2NCAzMTAsNjI2YzM3Nyw5NjIgNDA0LDIwMDkgNzcsMjk5MGMtMTIwLDM1NyAtMzIxLDc1NyAtNTQ1LDEwODFjLTUzMyw3NjggLTEzMjAsMTM1NyAtMjIwNSwxNjQ4Yy01MjMsMTczIC0xMDgzLDI0NSAtMTYzNSwyMTB6bTE2OTQsLTIzNjRjMjE1LC0zNSAzOTksLTEyNiA1NzAsLTI4MWM2MywtNTcgNTYsLTU2IDIyNCwtOGMxMzcsMzkgMjg5LDk3IDQzNiwxNjZjNTcsMjYgMTA2LDQ2IDEwOSw0M2MxMywtMTMgLTc4LC0yMDYgLTE0MSwtMzAwYy01NSwtODEgLTE3NiwtMjAxIC0yNjYsLTI2M2MtODUsLTU5IC05MSwtNTggMTA5LC0xNWM5NSwyMCAzNzMsMTA3IDQ0NCwxMzhjMjIsMTAgLTEyLC00NCAtMTAyLC0xNjBjLTY4LC04OCAtMjk4LC0zMTUgLTM3OSwtMzc1bC02MSwtNDVsLTYsLTE3NWMtMjAsLTUyMiAtMTAwLC04OTIgLTI4OCwtMTMyMGMtMTYxLC0zNzAgLTM0OCwtNjQzIC02MzcsLTkzMWMtNTU3LC01NTUgLTEyMTYsLTg2OCAtMTk3NiwtOTM5Yy0xNDEsLTEzIC01MTMsLTEzIC02NDYsMGMtMzgyLDM4IC03MjksMTMyIC0xMDU3LDI4NmMtMTExLDUyIC0yNjQsMTM1IC0zMzEsMTgwbC0zNCwyM2wyMjQsLTFjMjMwLC0xIDM0OSw5IDUxOSw0M2MyMDEsNDEgNDEzLDExNyA1OTAsMjExYzkzLDQ5IDMxNSwxOTEgMzI1LDIwOGMzLDUgLTIxLDExIC01MiwxNWMtMzczLDQxIC02NjUsMjE4IC04NjMsNTIyYy00NSw2OCAtMTAxLDE4NiAtMTE1LDI0NWMtNywyNiAtNiwyNiAzMiwxN2M4OCwtMjAgNDMzLC0zIDQzMywyMWMwLDQgLTE1LDExIC0zMiwxNGMtMTI1LDI1IC0zMjEsMTI5IC00MzcsMjMyYy0yMTUsMTkxIC0zMzcsNDAxIC0zODYsNjYzYy0xMyw3NSAtMjEsMjIxIC0xMSwyMjFjMiwwIDMwLC0xMyA2MiwtMjljODEsLTQwIDIwMSwtNzYgMzE4LC05NmM1NCwtOSA5OSwtMTUgMTAxLC0xM2MyLDIgLTMyLDMyIC03Niw2NmMtMjUyLDIwMSAtMzkzLDQ4MyAtNDA2LDgxM2MtNywxNjYgNiwyNjggNTIsNDA2YzMyLDk2IDg5LDIyMyAxMDAsMjIzYzMsMCAyMCwtMTcgMzgsLTM3YzMxNywtMzY4IDY0NCwtNjMxIDEwMTUsLTgxOGMzNjMsLTE4MiA3NzAsLTI5MCAxMTc1LC0zMTJjMTE2LC02IDEyMCwtNiAxMTMsMTNjLTI4LDcxIC0zNiwyOTMgLTE2LDQyMWMzNSwyMjIgMTMzLDQxMyAyOTksNTg2YzE3OCwxODUgMzg3LDMwMCA2MTIsMzM3YzQxLDYgODEsMTMgODksMTVjNDcsOSAyNDgsMyAzMjksLTEweiIgZmlsbD0iIzAwYWNlZCIgaWQ9InN2Z18yIi8+PC9nPjwvZz48L3N2Zz4=" alt="" /></button>').fadeIn(1000);
        });
        $(".btn-grp").animate({top: "35vh"}, 650);
        setInterval(function(){
            $("#btn").css("position", "relative").delay(3000).animate({"left": -6}, 85)
                 .animate({"left": 0}, 10)
                 .animate({"left": 6}, 85)
                 .animate({"left": 0}, 10);
             }, 0);  
    });
    $("#tweet").on("click", "button", function() {
        window.open(twitLink, 'newwindow', 'width=300, height=250');
    });
});
