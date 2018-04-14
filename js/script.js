$(".left-menu-btn").click(() => {
  $("nav").toggleClass("displayed");
});

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
	$(this).addClass('active').siblings().removeClass('active');
	$($(this).attr('data-tab')).removeClass('hidden');
	$($(this).siblings().attr('data-tab')).addClass('hidden');
});
