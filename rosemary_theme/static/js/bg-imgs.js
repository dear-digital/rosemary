function background_img(left, right, top, img) {
  $('body').append(`<span class="bg-img no-t-m" style="left:`+left+`; right:`+right+`; top:`+top+`"> <img src="`+img+`" alt="background-image" /> </span>`);
}

background_img('-100px', 'auto', '0', '/rosemary_theme/static/img/leaves.png');
background_img('auto', '-100px', '1200px', '/rosemary_theme/static/img/grapes.png');
background_img('-100px', 'auto', '3500px', '/rosemary_theme/static/img/leaves.png');
background_img('auto', '-100px', '4300px', '/rosemary_theme/static/img/grapes.png');
