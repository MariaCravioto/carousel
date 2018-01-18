$(document).ready(function(){
  ($(".control").click(showImage));
})

function showImage () {
 //console.log(this.dataset);
 var $target = $(this).data("target");
 //console.log($target);
 var $actualImage = $("div.active");
 //console.log($("[data-slide='"+$target+"']"));
 var $newImage = $("div[data-slide='" + $target +"']");
 $actualImage.removeClass("active");
 $newImage.addClass("active");
}



/*
var target = 0;

var loadPage = function () {

  //Elements
  var $buttons = $(".control");
  var $previous = $(".previous");
  var $next = $(".next");

  //Events
  $buttons.click(changeImage);
  $previous.click(previousImage);
  $next.click(nextImage);
};

//function of the buttons
var changeImage = function () {
  target = parseInt ($(this).data("target"));
  showImage(target);
};

//previous image function
var previousImage = function (e) {
  e.preventDefault();
  target = target - 1;
  target = (target < 0) ? 6 : target;
  showImage(target);
};

//next image function
var nextImage = function (e) {
  e.preventDefault();
  target = target + 1;
  target = (target > 6) ? 0 : target;
  showImage(target);
};


//function to show the image
var showImage = function (target) {
  var $lastSlide = $("div.active");
  var $slide = $("div[data-slide=" " + target + ""]");
  $lastSlide.removeClass("active");
  $slide.addClass("active");
};
*/
