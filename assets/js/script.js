const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")

menuIcon.addEventListener("click", function () {
  menulist.classList.toggle("show");
  menuIcon.classList.toggle("show");
  document.body.classList.toggle("overFlowHidden");
  document.querySelector(".menuIcon").classList.toggle("cross");
})

// =============== latest slider =============================
$('.responsive').slick({
  dots: false,
  // infinite: true,
  // autoplay: true,
  prevArrow: ".pre",
  nextArrow: ".nex",
  // autoplaySpeed: 1000,
  ltr: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ===================== team slider ===================================
$('.responsive-2').slick({
  dots: false,
  infinite: true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  ltr: true,
  prevArrow: ".prev",
  nextArrow: ".next",
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ================================ add/minus btn========================
const counting = document.getElementById("counting");
const addbtn = document.getElementById("addbtn");
const minusbtn = document.getElementById("minusbtn");

addbtn.addEventListener("click", function () {

  counting.innerHTML = +counting.innerHTML + 1;

});

minusbtn.addEventListener("click", function () {
  counting.innerHTML = +counting.innerHTML - 1;

});
// ================== back to top ===========================
const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
})
topBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
})

// // Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    // am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 24) {
        if (hour > 24) hour -= 24;
        // am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        // am_pm = "AM";
    }

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;

    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}

showTime();
