// page chi tiet
$(".title-content").click(function () {
  var mainContent = $(this).next(".main-content");
  var icon = $(this).find("i");

  if (mainContent.is(":visible")) {
    mainContent.slideUp();
    icon.removeClass("fa-minus").addClass("fa-plus");
  } else {
    $(".main-content").slideUp();
    $(".title-content i").removeClass("fa-minus").addClass("fa-plus"); // Đặt lại icon
    mainContent.slideDown();
    icon.removeClass("fa-plus").addClass("fa-minus");
  }
});
