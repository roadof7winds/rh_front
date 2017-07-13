$(document).ready(function(){
  $(".collapse-clinic-info").click(function () {
    $(this).closest('.by-clinic').find(".clinic-body").slideToggle(300);
    
    if ($(this).text()=="показать")
            {
               $(this).text("свернуть")
            }
        else
            {
               $(this).text("показать")
            };
      return false;
    });
});


$(document).ready(function(){
  $(".collapse-doctor-info").click(function () {
    $(this).closest('.doctor-info-block').find(".doctor-info-article").slideToggle(300);
    
    if ($(this).text()=="показать")
            {
               $(this).text("свернуть")
            }
        else
            {
               $(this).text("показать")
            };
      return false;
    });
});

$(document).ready(function(){
  $(".collapse-file-info").click(function () {
    $(this).closest('.attached').find(".record-list").slideToggle(300);
    
    if ($(this).text()=="показать")
            {
               $(this).text("свернуть")
            }
        else
            {
               $(this).text("показать")
            };
      return false;
    });
});

$(document).ready(function(){
  $(".collapse-consult-month").click(function () {
    $(this).closest('.consult-list').find(".consult-list-month-item").slideToggle(300);
    
    if ($(this).text()=="показать")
            {
               $(this).text("свернуть")
            }
        else
            {
               $(this).text("показать")
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

$('.to-favorites').click(function(){
  $(this).toggleClass('active');
});

//calendar
$('.new-calendar a').on('click', function(e) {
    $('.new-calendar a').removeClass('active-time');
    $(this).addClass('active-time');
    e.preventDefault(); 
});