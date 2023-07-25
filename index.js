$(document).ready(function () {
  function generateRandomString(
    length,
    includeDigits,
    includeUppercase,
    includeLowercase
  ) {
    let characters = "";
    if (includeDigits) characters += "0123456789";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  $("#generateBtn").on("click", function () {
    const length = parseInt($("#length").val());
    const includeDigits = $("#includeDigits").prop("checked");
    const includeUppercase = $("#includeUppercase").prop("checked");
    const includeLowercase = $("#includeLowercase").prop("checked");

    const generatedString = generateRandomString(
      length,
      includeDigits,
      includeUppercase,
      includeLowercase
    );

    $("#output").text(generatedString);
    $("#output").addClass("animated-text");

    setTimeout(function () {
      $("#output").removeClass("animated-text");
    }, 1000);
  });
});
