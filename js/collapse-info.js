$(document).ready(function(){
	$(".collapse-clinic-info").click(function () {
		$(this).closest('.by-clinic').find(".clinic-info-block").slideToggle(300);
		
		if ($(this).text()=="развернуть")
            {
               $(this).text("свернуть")
            }
        else
            {
               $(this).text("развернуть")
            };
      return false;
    });
});


$(document).ready(function(){
	$(".collapse-doctor-info").click(function () {
		$(this).closest('.doctor-info-block').find(".doctor-info-article").slideToggle(300);
		
		if ($(this).text()=="развернуть")
            {
               $(this).text("свернуть")
            }
        else
            {
               $(this).text("развернуть")
            };
      return false;
    });
});

/*  sidebar toggle */
$('.style-toggle-open').click(function() {
	$(this).toggleClass('btn-open');
    $('.sidebar-right').toggleClass('sidebar-open');
    
});

/*  sidebar shedule */
$('#btn_consult_online').click(function() {
	
    $('.sibebar-timetable').slideToggle(700);
    
});

$('.close-btn').click(function() {
    $('.sibebar-timetable').hide();
});
	
//scroll

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});