$(".left-menu-btn").click(() => {
  $("nav").toggleClass("displayed");
});

$(".right-menu-btn").click(() => {
  $("#settings").toggleClass("displayed");
});

$('.shade').click(() => {
	if($('#settings').hasClass('displayed')){
		$('#settings').toggleClass('displayed');
	}
})

$(".shade").click(() => {
  if( $("nav").hasClass("displayed") ) {
    $("nav").toggleClass("displayed");
  }
})

$(".surah-list-ul a").click(() => {
  $("nav").toggleClass("displayed");
});

$(".nav-btn").on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$(this).removeClass('active').siblings().addClass('active');
	$($(this).attr('data-tab')).removeClass('hidden');
	$($(this).siblings().attr('data-tab')).addClass('hidden');
});
