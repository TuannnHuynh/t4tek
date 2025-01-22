let checkType = false;

$(".show-password").on("click", function () {
  let input = $(this).siblings("input"); // Chọn input cùng cấp với button
  let icon = $(this).find("i"); // Chọn icon bên trong button

  // Kiểm tra kiểu dữ liệu của input và thay đổi
  if (input.attr("type") === "password") {
    input.attr("type", "text");
    icon.removeClass("fa-eye-slash").addClass("fa-eye"); // Đổi icon
  } else {
    input.attr("type", "password");
    icon.removeClass("fa-eye").addClass("fa-eye-slash"); // Đổi icon về mặc định
  }
});
