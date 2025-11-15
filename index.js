$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $("#nav-menu").addClass("sticky");
    } else {
      $("#nav-menu").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });

    $("html").css("scrollBehavior", "auto");
  });

  $("#nav-menu .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $("#nav-menu .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["Full Stack Developer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Full Stack Developer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: false,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 2,
        nav: false,
      },
    },
  });
});

// Resume download functionality for home section button
let drive = document
  .querySelector(".drivegoogle")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // First open in new tab for viewing
    window.open("./images/Adarsh_Tripathi_Resume.pdf", "_blank");
    // Then trigger download after a short delay
    setTimeout(function () {
      const link = document.createElement("a");
      link.href = "./images/Adarsh_Tripathi_Resume.pdf";
      link.download = "Adarsh_Tripathi_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  });

// Resume download functionality for navbar button
let drive2 = document
  .querySelector(".googleDrive")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // First open in new tab for viewing
    window.open("./images/Adarsh_Tripathi_Resume.pdf", "_blank");
    // Then trigger download after a short delay
    setTimeout(function () {
      const link = document.createElement("a");
      link.href = "./images/Adarsh_Tripathi_Resume.pdf";
      link.download = "Adarsh_Tripathi_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  });
