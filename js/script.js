$(function () {
  // jQuery goes here...
  // Uncomment this line to fade out the red box on page load
  /*
  $(".lightbox").delay(500).fadeIn(2000);

  $(".blue-box").animate({
    marginLeft: "+=200px",
  }, 2000, "linear");

  $(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(2000);
  $(".red-box").fadeIn(1000);
  $(".red-box").fadeTo(1000, 0.5);
  $(".blue-box").toggle(2000);
  $(".blue-box").toggle(2000);
  $("p").slideToggle(2000);
  $("p").slideToggle(2000);

  $("p").animate({
    fontSize: "20px",
  }, 200);

  $(".red-box").delay(3000).fadeTo(1000, 0.5, function() {
    alert("This is the callback: Animation almost finished.");
  });

  $(".lightbox").fadeOut(3000); 
  
  $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)");
  
  $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").children("parent").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").siblings("p, :header").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");
  
  $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").filter(function(index) {
    return index % 3 === 2;
  }).css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").eq(5).css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").not("#list ul li").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").not(function(index) {
    return index % 3 === 2;
  }).css("background-color", "rgba(180, 180, 30, 0.8)");

  $("ul ul:first").append("<li>I'm gonna be the the last sub item</li>");
  $("<li>I'm gonna be the last item</li>").appendTo($("ul ul:first"));
  $("ul ul:first").prepend("<li>I'm gonna be the the first sub item</li>");
  $("<h4>TNS</h4>").prependTo("#content");

  $(".red-box").after("<div class='red-box'>Another Red Box</div>");
  $(".blue-box").before("<div class='blue-box'>Another Blue Box</div>");
  $(".blue-box").before(function() {
    return "<div class='blue-box'>Blue 2 </div>";
  });
  $(".blue-box").before($(".red-box"));
  $("p").after($("#list"));
 
  $("li").replaceWith("<li>Replaced.</li>");
  $("li").replaceWith(function() {
    return "<li>Replaced with function.</li>";
  });
  var firstListItem = $("li:first");
  $("p").replaceWith(firstListItem);

  $(".red-box, .blue-box").replaceWith("<div class='green-box'>More Green</div>");
  $("<div class='green-box'>More Green!</div>").replaceAll(".red-box, .blue-box");
   
  $("li").remove();
  $("form").children().not("input:text, textarea, br").remove();

  var detachedListItem = $("li").detach();
  $("#content").append(detachedListItem);
  $("p:first").empty();

  // attr(), prop(), val()
  var specialLink = $("#special-link");
  console.log(specialLink.attr("href"));
  specialLink.attr("href", "https://tns-gh.github.io/TNS-react-prac/");
  var checkbox = $("input:checkbox");
  var textInput = $("input:text");
  console.log(textInput.val());
  var rangeInput = $("input[type='range']");
  console.log(rangeInput.val());
  
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  var i = 0;
  setInterval(function() {
    i = (i + 1) % images.length; // 0,1,2,0,1,2
    galleryImage.fadeOut(1500, function() {
      $(this).attr("src", images[i]);
      $(this).fadeIn(1500);
    });
  }, 5000);


  $(".gallery").css("display", "none");
  var redBox = $(".red-box");
  console.log(redBox.css("width"));
  console.log(redBox.width());

  redBox.css("background-color","#AA7700");
  $("p").css("font-size","18px");
  redBox.css("width", "+=20px");

  var properties = $("p").css(["font-size", "line-height", "color"]);

  redBox.css("user-select", "none");
  
  */
  $("#btn-click").click(function() {
    alert("Button was clicked");
  });
  $(".red-box").click(function() {
    $(this).fadeTo(500, 0.5);
  });
  $("#btn-hover").hover(function() {
    alert("Button was hovered");
  });

  $(".green-box").hover(function() {
    $(this).text("I was hovered");
  });

  var blueBox = $(".blue-box");
  
  blueBox.mouseenter(function() {
    $(this).stop().fadeTo(500, 0.5);
  });
  blueBox.mouseleave(function() {
    $(this).stop().fadeTo(500, 1);
  });
 
  blueBox.hover(function() {
    $(this).stop().fadeTo(500, 0.5);
  }, function() {
    $(this).stop().fadeTo(500, 1);
  });

  $("html").on("click keydown", function() {
    console.log("Mouse was clicked or key was pressed.");
  });

  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  var i = 0;
  $(".gallery").find("img").on("click", function() {
    i = (i +1) % images.length;
    $(this).fadeOut(function() {
      $(this).attr("src", images[i]).fadeIn();
    });
  });
});
