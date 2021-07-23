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

function fill_the_bar() {
  $('.loading-complete').each(function() {
    var completed_loading = $(this).data('complete');
    $(this).width(completed_loading+'%');
  });
}

fill_the_bar();

$('.qty-plus').click(function() {
  var current_qty = parseInt($(this).prev().data('qty'));
  updated_qty = current_qty + 1;
  $(this).prev().data('qty', updated_qty);
  $(this).prev().text(updated_qty);
});

$('.qty-minus').click(function() {
  var current_qty = parseInt($(this).next().data('qty'));
  updated_qty = current_qty - 1;
  $(this).next().data('qty', updated_qty);
  $(this).next().text(updated_qty);
});

let act = document.querySelectorAll(".accordion.active");
  for(let j = 0; j < act.length; j++){
    act[j].classList.remove("active");
    act[j].nextElementSibling.style.maxHeight = null; //or 0px
  }

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

      if($(this).hasClass('active')){
        $(this).removeClass('active');
      }

      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        let active = document.querySelectorAll(".accordion.active");
        for(let j = 0; j < active.length; j++){
          active[j].classList.remove("active");
          active[j].nextElementSibling.style.maxHeight = null;
        }
        this.classList.toggle("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  $('.check-box').click(function() {
    $(this).toggleClass('selected');
    if($(this).hasClass('selected')){
      $(this).prev().prop("checked", true);
    }
    else {
      $(this).prev().prop("checked", false);
    }
  });

  var myMenu = document.getElementById("sticky-menu");

      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
          myMenu.style.display = "block";
        } else {
          myMenu.style.display = "none";
        }
      }

      $( ".navbar-toggler, .background-drawer" ).click(function() {
        if($('.navbar-toggler').hasClass("show") || $('.background-drawer').hasClass("drawn")) {
          $('.navbar-toggler').removeClass("show");
          $(".drawer-menu").removeClass("drawn");
          $(".background-drawer").removeClass("drawn");
          $('.header-right').removeClass('opacity0');
          $("body").removeClass("no-scroll");
        } else {
          $('.navbar-toggler').addClass("show");
          $(".drawer-menu").addClass("drawn");
          $(".background-drawer").addClass("drawn");
          $("body").addClass("no-scroll");
          $('.header-right').addClass('opacity0');
        }
      });

      $( ".navbar-toggler" ).click(function() {
        if(($(".bar1").hasClass("rotate"))) {
          $(".bar1").removeClass("rotate");
          $(".bar3").removeClass("rotate");
          $(".bar2").removeClass("disappear");
        } else {
          $(".bar1").addClass("rotate");
          $(".bar3").addClass("rotate");
          $(".bar2").addClass("disappear");
        }
      });

      $('.shop-categories .accordion').click(function() {
        if($(this).hasClass('active')) {
          $(this).next().addClass('panel-open');
        }
        else {
          $(this).next().removeClass('panel-open');
        }

      });
