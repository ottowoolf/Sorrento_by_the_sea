/**
 * Variable with initial value for the first img
 * @variable
 */
var slideIndex = 1;

showSlides(slideIndex);

/**
 * Next/previous buttons controls
 * @param {number} n
 * @function plusSlides
 */
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
/**
 *
 * @param {number} n
 * @function currentSlide
 */
function currentSlide(n) {
  showSlides((slideIndex = n));
}
/**
 *
 * @param {number} n
 * @function showSlides
 */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var thumbnails = document.getElementsByClassName("thumbnail");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
  captionText.innerHTML = thumbnails[slideIndex - 1].alt;
}

// contact form validation Script

function validateForm() {
  var username = document.form.username.value;
  var email = document.form.email.value;
  var phone = document.form.phone.value;
  var message = document.form.message.value;
  var regexUsername = /^[a-zA-Z]+$/;
  var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  var regexPhone = /^\d{10}$/;

  if (username == "") {
    document.getElementById("name-error").innerText =
      "Please provide your username!!";
    return false;
  }
  if (username.length < 2) {
    document.getElementById("name-error").innerText =
      "Username must be at least 2 letters";
    return false;
  }
  if (!regexUsername.test(username)) {
    document.getElementById("name-error").innerText =
      "Username must contain only letters!!";
    return false;
  } else {
    document.getElementById("name-error").innerText = "";
  }

  if (email == "" && phone == "") {
    document.getElementById("email-error").innerText =
      "You must provide at least one contact detail, Email or Phone!!";
    return false;
  }
  if (!regexEmail.test(email) && email !== "") {
    document.getElementById("email-error").innerText =
      "Incorrect email format!! Please provide a valid email address";
    return false;
  } else {
    document.getElementById("email-error").innerText = "";
  }
  if (!regexPhone.test(phone) && phone !== "") {
    document.getElementById("phone-error").innerText =
      "Incorrect phone format!! Please provide a valid phone number";
    return false;
  } else {
    document.getElementById("phone-error").innerText = "";
  }
  if (message == "") {
    document.getElementById("message-error").innerText =
      "Please write a message!!";
    return false;
  } else {
    document.getElementById("message-error").innerText = "";
  }
}
