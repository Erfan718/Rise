$(function () {
  $('[ data-toggle="tooltip"]').tooltip();
  
  $(".btn-group-fab").on("click", function () {
    $(".btn-group-fab").toggleClass("active");
  });
});

var myLink = document.getElementById("myLink");
myLink.addEventListener("click", function (e) {
  e.preventDefault();
  // جلوگیری از رفتن به صفحه مقصد مستقیما
  window.open(this.href, "_blank");
  // باز کردن صفحه در تب جدید
});
var myLink = document.getElementById("myLink-login");
myLink.addEventListener("click", function (e) {
  e.preventDefault();
  // جلوگیری از رفتن به صفحه مقصد مستقیما
  window.open(this.href, "_blank");
  // باز کردن صفحه در تب جدید
});


document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var links = navbar.querySelectorAll("a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();

      var targetId = this.getAttribute("href");
      var targetElement = document.querySelector(targetId);

      var navbarHeight = navbar.offsetHeight;
      var targetOffset = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    });
  }
});

// زمانی که فرم سابمیت شود، این تابع اجرا می‌شود
function searchFormSubmit(event) {
  event.preventDefault(); // جلوگیری از ارسال فرم

  var searchText = document.getElementById("search-input").value; // مقدار متن جستجو را دریافت می‌کنیم
  var linkElement = document.querySelector('a[href="#about"]'); // النت با لینک موردنظر را پیدا می‌کنیم
  var targetElement = document.getElementById(
    linkElement.getAttribute("href").substr(1)
  ); // المنت هدف را بر اساس href مشخص می‌کنیم

  if (searchText === "درباره ما") {
    // اگر متن جستجو مطابق با النت باشد
    targetElement.scrollIntoView({ behavior: "smooth" }); // صفحه را به المنت هدف اسکرول می‌کنیم
  } else if (searchText === "خدمات ما") {
    var servicesLinkElement = document.querySelector('a[href="#services"]');
    var servicesTargetElement = document.getElementById(
      servicesLinkElement.getAttribute("href").substr(1)
    );
    servicesTargetElement.scrollIntoView({ behavior: "smooth" });
  } else if (searchText === "گروه خدمات") {
    var servicesLinkElement = document.querySelector(
      'a[href="#product-group"]'
    );
    var servicesTargetElement = document.getElementById(
      servicesLinkElement.getAttribute("href").substr(1)
    );
    servicesTargetElement.scrollIntoView({ behavior: "smooth" });
  } else if (searchText === "گروه توسعه") {
    var servicesLinkElement = document.querySelector('a[href="#teachers"]');
    var servicesTargetElement = document.getElementById(
      servicesLinkElement.getAttribute("href").substr(1)
    );
    servicesTargetElement.scrollIntoView({ behavior: "smooth" });
  } else {
    return 0;
  }
}


