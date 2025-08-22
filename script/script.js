

document.addEventListener("DOMContentLoaded", function(e){
  slideMenuToggle();
  mainSlide();
  main_keyword_slide();
})

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