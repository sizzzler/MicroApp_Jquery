$( document.body ).click(function() {
  $( "div:hidden" ).first().fadeIn( "slow" );
});

$( "div" ).click(function() {
  $( "div" ).fadeOut( "slow" );
});
