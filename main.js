$(document).ready(function() {
  //photo slider using slick plugin
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    fade: true,
    speed: 700
  });

  //popup dialog box
  $("#submit").click(function(evt){
		$("#dialog").dialog();
	});

  //navbar navigation
  $("#home").click(function() {
    window.location.href = "index.html";
  });
  $("#schedule").click(function() {
    window.location.href = "schedule.html";
  });
  $("#league").click(function() {
    window.location.href = "league.html";
  });
  $("#about").click(function() {
    window.location.href = "about.html";
  });
  $("#contact").click(function() {
    window.location.href = "contact.html";
  });

  //button linking to niner engage website
  $("#ninerEngageButton").click(function() {
    window.location.href = "https://ninerengage.uncc.edu/organization/men-s-soccer-club";
  });

  //data from json file
  $.getJSON("teams.json", function(data) {
    $.each(data, function() {
      $.each(this, function(key, value) {
        $("#teams").append(
          "- <p>" + value.team_name + "</p><br>"
        );
      });
    });
  });

  //data from website api
  var url = "https://api.openweathermap.org/data/2.5/weather?zip=28223,us&units=imperial&APPID=c6fb9800641a2b115501f0156d67d566";
  $.getJSON(url, function(data) {
    var html = "";
    var icon = data.weather[0].icon;
    var iconURL = "http://openweathermap.org/img/w/" + icon + ".png";
    html += "<h3>" + data.name + " Weather:</h3>" + data.main.temp + " &#176F<br>" + data.weather[0].main + "<h3>";
    console.log(html);
    $("#weather").html(html);
  });

  // $.ajax({
  //   url : url,
  //   method : 'GET',
  //   dataType: "jsonp",
  //   success : function (data) {
  //     var info = show(data);
  //     var tempr = data.main.temp;
  //     var location = data.name;
  //     var desc = data.weather.description;
  //     $("#weather").html(location + "<br>" + tempr + "<br>" + desc);
  //   }
  // });
});
