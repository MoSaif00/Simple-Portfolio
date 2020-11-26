let $links = $('.itemlinks');

$links.click(function (e) {
  $links.removeClass('active');
  let clickedLink = e.target;
  clickedLink = $(clickedLink);
  let position = clickedLink.attr('data-position');
  let translateValue = 'translate3d(-' + position * 20 + '%,0px,0px)';
  $('#wrapper').css({
    transform: translateValue,
  });
  clickedLink.addClass('active');
});

$($links[0]).addClass('active');
