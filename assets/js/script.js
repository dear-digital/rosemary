
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
