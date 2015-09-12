function hoverOver(e) {
  $(this).addClass('active');
}

function hoverOut(e) {
  $(this).removeClass('active');
}

$('nav a').hover(hoverOver, hoverOut);

$('nav a').click(function(e) {
  var href = this.hash,
    boxId = href.replace('#', ''),
    colour = boxId,
    boxCls = boxId + '-box';

  $(href).css('background', colour);
});

$('footer p').click(function(e) {
  var boxes = $('[class*="-box"]');
  boxes.css('background', '#eee');
});