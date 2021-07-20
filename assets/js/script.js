//cookie code start
             function setCookie(cname, cvalue, exdays) {
             var d = new Date();
             d.setTime(d.getTime() + (exdays*24*60*60*1000));
             var expires = "expires="+ d.toUTCString();
             document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
             }
             function getCookie(cname) {
             var name = cname + "=";
             var decodedCookie = decodeURIComponent(document.cookie);
             var ca = decodedCookie.split(';');
             for(var i = 0; i <ca.length; i++) {
             var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
    }
    return "";
    }
    var anouncement=getCookie("header-anouncement");
    if (anouncement == "") {
      $('.header').addClass('more-height');
      $('.normal-top').addClass('more-top');
      $('.announcement-bar').css('display','flex');
    }
    $('#announcement-bar-close').click(function(){
      $('.header').removeClass('more-height');
      $('.normal-top').removeClass('more-top');
      $('.announcement-bar').css('display','none');
      setCookie(".announcement-bar", "close", 1);
    });


$('.language-selected').click(function() {
  if($('.languages').hasClass('no-disp')){
    $('.languages').removeClass('no-disp');
    $('.language-selected .down-chevron').addClass('rotate180');
  }
  else {
    $('.languages').addClass('no-disp');
    $('.language-selected .down-chevron').removeClass('rotate180');
  }
});
$('.languages').click(function() {
  $('.languages').addClass('no-disp');
  $('.language-selected .down-chevron').removeClass('rotate180');
});

$('.header-user').click(function() {
  if($('.header-user-login').hasClass('no-disp')){
    $('.header-user-login').removeClass('no-disp');
    $('.header-user .down-chevron').addClass('rotate180');
  }
  else {
    $('.header-user-login').addClass('no-disp');
    $('.header-user .down-chevron').removeClass('rotate180');
  }
});

$('.header-cart').click(function() {
  if($('.header-cart-info').hasClass('no-disp')){
    $('.header-cart-info').removeClass('no-disp');
    $('.header-cart .down-chevron').addClass('rotate180');
  }
  else {
    $('.header-cart-info').addClass('no-disp');
    $('.header-cart .down-chevron').removeClass('rotate180');
  }
});

$('.dilivery-check-link').click(function() {
  if($('.check-if-we-deliver').hasClass('no-disp')) {
    $('.check-if-we-deliver').removeClass('no-disp');
  }
  else {
    $('.check-if-we-deliver').addClass('no-disp');
  }
});
