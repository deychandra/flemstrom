$(document).ready(function () {
  $(".humburger").click(function () {
    $(".humburger").toggleClass("menu-open");
    // $(".open-in-mobile").toggleClass("active");
  });

  $(".brand-slide").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    rtl: false,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        autoplay: true,
        items: 3,
      },
      600: {
        autoplay: true,
        items: 4,
      },
      1000: {
        autoplay: true,
        items: 5,
      },
      1320: {
        autoplay: true,
        items: 6,
      },
      1600: {
        autoplay: true,
        items: 6,
      },
    },
  });
});

// Video play-pause
$(document).ready(function () {
  var video = document.getElementById("myVideo");
  var playPauseBtn = $("#playPauseBtn");

  playPauseBtn.on("click", function () {
    if (video.paused) {
      video.play();
      playPauseBtn.html('<i class="fa-solid fa-pause"></i>'); // Change to pause icon
    } else {
      video.pause();
      playPauseBtn.html('<i class="fa-solid fa-play"></i>');
    }
  });
});
// Video play-pause

// Heading-one
const headingOne = document.querySelector(".h-one");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  headingOne.style.transform = `translate3d(0, ${-scrollPos * 0.6}px, 0)`;
});
// Heading-one

// Heading-two
const headingTwo = document.querySelector(".h-two");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  headingTwo.style.transform = `translate3d(0, ${scrollPos * 0.6}px, 0)`; //
});
// Heading-two

// Subcontent
const subContent = document.querySelector(".sub-content");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;

  if (subContent != null) {
    subContent.style.transform = `translate3d(0, ${scrollPos * 0.6}px, 0)`;
  }
});
// Subcontent

// Heading-three $ four

// const hThree = document.querySelector('.h-three');
// const hFour = document.querySelector('.h-four');

// let lastScrollTop = 0;

// window.addEventListener('scroll', () => {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   const scrollDirection = scrollTop > lastScrollTop? 'down' : 'up';

//   if (scrollDirection === 'down') {
//     hThree.style.transform = 'translateY(0px)';
//     hFour.style.transform = 'translateY(0px)';
//   } else {
//     hThree.style.transform = 'translateY(-170px)';
//     hFour.style.transform = 'translateY(190px)';
//   }

//   lastScrollTop = scrollTop;
// });

// hThree.style.transition = 'transform 0.5s ease-in-out';
// hFour.style.transition = 'transform 0.5s ease-in-out';

$(document).ready(function () {
  const $hThree = $(".h-three");
  const $hFour = $(".h-four");
  let lastScrollTop = 0;
  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";

    if (scrollDirection === "down") {
      $hThree.css("transform", "translateY(0px)");
      $hFour.css("transform", "translateY(0px)");
    } else {
      $hThree.css("transform", "translateY(-170px)");
      $hFour.css("transform", "translateY(190px)");
    }

    lastScrollTop = scrollTop;
  });

  $hThree.css("transition", "transform 0.5s ease-in-out");
  $hFour.css("transition", "transform 0.5s ease-in-out");
});

// About-page-animation
$(document).ready(function () {
  const $about01 = $("#about-01");
  const $about02 = $("#about02");
  let lastScrollTop = 0;

  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";

    if (scrollDirection === "down") {
      $about01.css("transform", "translateY(0px)");
      $about02.css("transform", "translateY(0px)");
    } else {
      $about01.css("transform", "translateY(-170px)");
      $about02.css("transform", "translateY(190px)");
    }

    lastScrollTop = scrollTop;
  });

  $about01.css("transition", "transform 0.5s ease-in-out");
  $about02.css("transition", "transform 0.5s ease-in-out");
});

// About-page-animation


    


$(document).ready(function () {
  let lastScrollTop = 0;
  $(window).on('scroll', function () {
      let currentScrollTop = $(this).scrollTop();
      let section2 = $('#price-slide-animation');
      let sectionOffset = section2.offset().top;
      let sectionHeight = section2.outerHeight();

      if (currentScrollTop >= sectionOffset && currentScrollTop < sectionOffset + sectionHeight) {
          if (currentScrollTop > lastScrollTop) {
              section2.find('.rtl-text').addClass('rtl-animation');
          } else {
              section2.find('.rtl-text').removeClass('rtl-animation');
          }
      } else {
          section2.find('.rtl-text').removeClass('rtl-animation');
      }
      lastScrollTop = currentScrollTop;
  });
});


// Youtube-player=Start
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    $('#play-button').on('click', function() {
        player.playVideo();
        $(this).hide();
    });
}

// Youtube-player=End