$(document).ready(function() {
	
/*Pagination script on Tbale***/ 	 
  var totalRows = $('#new_employee_table').find('tbody tr:has(td)').length;
  var recordPerPage = 5;
  var totalPages = Math.ceil(totalRows / recordPerPage);
  var $pages = $('<ul class="pagination pagination-lg justify-content-center" id="pages"></ul>');
  for (i = 0; i < totalPages; i++) {
    $('<li class="page-item"><span class="page-link">' + (i + 1) + '</span></li>').appendTo($pages);
  }
  $pages.appendTo('#page-link-order');

  $('.pageNumber').hover(
    function() {
      $(this).addClass('focus');
    },
    function() {
      $(this).removeClass('focus');
    }
  );

  $('table').find('tbody tr:has(td)').hide();
  var tr = $('table tbody tr:has(td)');
  for (var i = 0; i <= recordPerPage - 1; i++) {
    $(tr[i]).show();
  }
  $('li').click(function(event) {
    $('#new_employee_table').find('tbody tr:has(td)').hide();
    var nBegin = ($(this).text() - 1) * recordPerPage;
    var nEnd = $(this).text() * recordPerPage - 1;
    for (var i = nBegin; i <= nEnd; i++) {
      $(tr[i]).show();
    }
  });
  
/************/
  
  $("#dashboard,#tables").click(function(){     /****active class effect on selected menu item***/
	  let val = $(this).attr("value");
	  
	  switch(val){
		  case "dashboard":
		  console.log(val)
		  $(".dashboard-sidebar").addClass("active-sidebar");
		  $(".tables-sidebar").removeClass("active-sidebar");
		  $(".weekly-overview").css("display","block");
		  $(".table-data").css("display","none");
		  
		  break;
		  
		  case "tables":
		  console.log(val)
		  $(".tables-sidebar").addClass("active-sidebar");
		  $(".dashboard-sidebar").removeClass("active-sidebar");
		  $(".table-data").css("display","block");
		  $(".weekly-overview").css("display","none");
		  break;		  
	  }	  
  });
  
  /****** sidebar small viewport hide/view effect****/
  $("#sidemenu_btn").click(function(){   
	  $(".sidebar").css("width","250px");
	  $("#main_body_container").css({"margin-left":"250px"});
  });
  
  $(".list-group-item").children("a").click(function(){
	   $(".sidebar").css("width","0");
	  $("#main_body_container").css({"margin-left":"0"});
  });
  /*****************/
  
});
