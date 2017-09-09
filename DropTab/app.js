$('.search-input').focus(function(){
    $(this).parent().addClass('focus');
  }).blur(function(){
    $(this).parent().removeClass('focus');
  })
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
var string = "url(" + "'https://source.unsplash.com/random/" + width + "x" + height + "')";
var body = document.getElementsByTagName('body')[0];
var image = string;
body.style.backgroundImage = image;