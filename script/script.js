

document.addEventListener("DOMContentLoaded", function(e){
  introAnimation();
  slideMenuToggle();
  mainSlide();
  main_keyword_slide();
  subHeaderColor();
  qnaToggle();

  headerMenu();
})

const introAnimation = () => {
  const introSection = document.querySelector('.intro_section');
  if(!introSection) return;

  // 스크롤 막기
  document.body.classList.add("no-scroll");

  window.addEventListener("DOMContentLoaded", () => {
    // PC or MO 구분 (CSS 미디어쿼리랑 동일 기준)
    const isMobile = window.matchMedia("(max-width: 650px)").matches;

    const selector = isMobile 
      ? ".intro_section .mo.intro2, .intro_section .mo.intro3, .intro_section .mo.intro4, .intro_section .mo.intro5"
      : ".intro_section .pc.intro2, .intro_section .pc.intro3, .intro_section .pc.intro4, .intro_section .pc.intro5";

    const intros = document.querySelectorAll(selector);

    // 순차 애니메이션
    intros.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = "opacity 1s ease-in-out";
        el.style.opacity = "1";
      }, (i + 1) * 700);
    });

    // 전체 끝난 후 intro_section 제거
    const totalDuration = (intros.length + 1) * 700 + 1000; 
    setTimeout(() => {
      introSection.classList.add("fade-out");

      introSection.addEventListener("transitionend", () => {
        introSection.style.display = "none";
        document.body.classList.remove("no-scroll");
      }, { once: true });
    }, totalDuration);
  });
};

const qnaToggle = () => {
  $('.sub.question .qna_list .box.q_box').click(function(){
    $(this).closest('.item').toggleClass('show');
    $(this).siblings('.a_box').slideToggle();
  })
}

const subHeaderColor = () => {
  const pageStyles = [
    { className: "question", color: "#EA5E75" },
  ];

  const mainEl = document.querySelector("main");
  const headerEl = document.querySelector("header");

  if (mainEl && headerEl) {
    pageStyles.forEach((rule) => {
      if (mainEl.classList.contains(rule.className)) {
        headerEl.style.background = rule.color;
        headerEl.style.boxShadow = "unset";
      }
    });
  }
}

const main_keyword_slide = () => {
  const inverseEl = document.querySelector(".inverse");
  const reverseEl = document.querySelector(".reverse");

  if (inverseEl) {
    gsap.to(inverseEl, {
      xPercent: -50, // 왼쪽으로 이동
      duration: 40,
      ease: "none",
      repeat: -1
    });
  }

  if (reverseEl) {
    gsap.to(reverseEl, {
      xPercent: 50, // 왼쪽으로 이동
      duration: 40,
      ease: "none",
      repeat: -1
    });
  }
};

const mainSlide = () => {
  var swiper = new Swiper(".main .slide_section .swiper", {
    loop : true, 
    spaceBetween: 46,
    centeredSlides: true,
    breakpoints: {
      1250: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
    },
    pagination: {
      el: ".main .slide_section .swiper-pagination",
      clickable: true,
    },
  });
}

const slideMenuToggle = () => {
  $('header .menu_btn').click(function(){
    $('.slide_menu').addClass('show');
    $('.menu_close_bg').addClass('show');
  })

  $('.menu_close_bg').click(function(){
    $('.slide_menu').removeClass('show');
    $('.menu_close_bg').removeClass('show');
  })

  $('.slide_menu .btn_wrap .close_btn').click(function(){
    $('.slide_menu').removeClass('show');
    $('.menu_close_bg').removeClass('show');
  })
}

// header

const headerMenu = () => {
  $("header .menu_list").mouseenter(function(){
    $(".header_2").stop().slideDown();
  })
  $(".header_2").mouseleave(function(){
    $(this).stop().slideUp();
  })

}