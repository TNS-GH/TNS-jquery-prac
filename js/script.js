$(function () {
  var counter = 0;
  $("#btn-click").click(function () {
    counter += 1;
    $(this).text("Times Clicked:" + counter);
  });

  var blueBox = $(".blue-box");

  blueBox.mouseenter(function () {
    $(this).stop().text("Hovering").fadeTo(500, 0.5);
  });
  blueBox.mouseleave(function () {
    $(this).stop().text("Hover over me").fadeTo(500, 1);
  });

  $("html").on("click keydown", function () {
    console.log("Mouse was clicked or key was pressed.");
  });

  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  setInterval(function () {
    $(".red-box").fadeTo(2000, 0.3);
    $(".red-box").fadeTo(2000, 1);
    $(".green-box").animate(
      {
        marginLeft: "150px",
        opacity: "100",
        height: "50px",
        width: "50px",
        marginTop: "0px",
      },
      2000
    );
    $(".green-box").animate(
      {
        marginLeft: "0px",
        opacity: "100",
        height: "80px",
        width: "80px",
        marginTop: "10px",
      },
      2000
    );
  }, 4000);

  var i = 0;
  setInterval(function () {
    i = (i + 1) % images.length; // 0,1,2,0,1,2
    galleryImage.fadeOut(1500, function () {
      $(this).attr("src", images[i]);
      $(this).fadeIn(1500);
    });
  }, 4000);

  $("form").submit(function (event) {
    alert("Feedback Submitted");
    event.preventDefault();
  });

});
