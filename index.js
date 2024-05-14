$(document).ready(function () {
  $('.collections-slider').slick({
    slidesToShow: 1.1,
    slidesToScroll: 1,
    infinite: false,
  });


  $('.link1').mouseover(function () {
    $('.dp1').slideDown("slow");
  })
  $('.link1').mouseleave(function () {
    $('.dp1').slideUp("");
  })
  $('.link2').mouseover(function () {
    $('.dp2').slideDown("slow");
  })
  $('.link2').mouseleave(function () {
    $('.dp2').slideUp("slow");
  })
  $('.link3').mouseover(function () {
    $('.dp3').slideDown("slow");
  })
  $('.link3').mouseleave(function () {
    $('.dp3').slideUp();
  })
  $('.link4').mouseover(function () {
    $('.dp4').slideDown("slow");
  })
  $('.link4').mouseleave(function () {
    $('.dp4').slideUp();
  })
  $('.link5').mouseover(function () {
    $('.dp5').slideDown("slow");
  })
  $('.link5').mouseleave(function () {
    $('.dp5').slideUp();
  })
  $('.currency').click(function () {
    $('.dorpdowncurr').slideToggle("");
  })
  $('.user').click(function () {
    $('.dropdownuser').slideToggle("");
  })
  $('.create').click(function () {
    $('.userformlogin').hide("");
    $('.userformsignup').show("");
  })
  $('.loginbt').click(function () {
    $('.userformsignup').hide("");
    $('.userformlogin').show("");
  })
  $(".menuitem").click(function () {
    var div = $('.drop');
    div.animate({
      left: div.css('left') === '0px' ? '-450px' : '0px'
    }, "");
  });
  // product card slider
  // $('.img').slick({
  //   slidesToShow: 1.1,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   dots:true,
  // });
})
