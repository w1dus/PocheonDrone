

document.addEventListener("DOMContentLoaded", function(e){
  slideMenuToggle();
})


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