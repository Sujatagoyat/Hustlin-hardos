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

const timeData = document.querySelector(".time");
function countdownTimer(timeString) {
  let [days, hours, minutes, seconds] = timeString.split(":").map(Number);
  let totalSeconds =
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  const interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval);
      alert("Timer has ended");
      return;
    }
    days = Math.floor(totalSeconds / (24 * 60 * 60));
    hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    seconds = totalSeconds % 60;
    const timeLeft = `${days}:${hours}:${minutes}:${seconds}`;
    timeData.innerHTML = timeLeft;
    totalSeconds--;
  }, 1000);
}
countdownTimer("40:15:12:10");
