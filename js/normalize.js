//borrowed from https://snook.ca/archives/javascript/normalize-bootstrap-carousel-heights
function normalizeSlideHeights() {
    $('.carousel').each(function(){
      var items = $('.carousel-item', this);
      // reset the height
      items.css('min-height', 0);
      // set the height
      var maxHeight = Math.max.apply(null, 
          items.map(function(){
              return $(this).outerHeight()}).get() );
      items.css('min-height', maxHeight + 'px');
    })
}

$(window).on(
    'load resize orientationchange', 
    normalizeSlideHeights);