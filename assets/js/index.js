jQuery(document).ready(function(){
  // 'catTopPosition' is the amount of pixels #cat
  // is from the top of the document

  //$( ".post").width($( window ).width());
  var positionTrack = 250;
  var currentPost = 0;
  // $( ".post-contents").each(function() {
  //   $( this ).offset({ top: 200, left: positionTrack });
  //   positionTrack += 5000;
  // });


  $( window ).resize(function() {
    //$( ".post" ).width($( window ).width());
    //$( ".post-contents").width($( window ).width() /2);
  });

  // When #scroll is clicked
  jQuery('#scroll').click(function(){
    // Scroll left to next post
//    $( ".post-contents:eq(" + currentPost++ + ")" ).animate({left: "-5000"}, 2500, 'swing');
//    $( ".post-contents:eq(" + currentPost + ")" ).animate({left: "250"}, 1000, 'swing');

//    var currentPosition = $(document).scrollLeft() + $( window ).width();
//    jQuery('html, body').animate({scrollLeft:currentPosition}, 'fast');

    // Stop the link from acting like a normal anchor link
    return false;
  });
});
