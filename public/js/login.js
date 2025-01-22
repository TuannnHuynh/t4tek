let checkType = false;

$(".show-password").click(function () {
  if (!checkType) {
    $("#InputPassword").get(0).type = "text";
    checkType = true;
    $(".show-password").html('<i class="fa-solid fa-eye"></i>');
  } else {
    $("#InputPassword").get(0).type = "password";
    checkType = false;
    $(".show-password").html('<i class="fa-solid fa-eye-slash"></i>');
  }
});
