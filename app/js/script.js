!function ($) {
    'use strict';

    $(window).scroll(function() {
      $(".active-animation").each(function() {
          if ($(this).offset().top - 200 <= $(window).scrollTop()) {
              $(this).addClass("active");
          } else {
              $(this).removeClass("active");
          }
     });
    });

    var window_wt=$(window).width();
    var window_Ht = $(window).height();

    $('.scroll-sec').click(function(){
      var sec_top = $('#'+$(this).attr('rel')).offset().top - 50;
      var scrollto =  sec_top;
      $('html, body').animate({scrollTop:scrollto}, 100);
    });

    $('.nav-link').click(function(){
      $('.nav-link').removeClass('active');
      $(this).addClass('active');
    });

    $('.testimonial-points-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-profile-points'
      });
      $('.testimonial-profile-points').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.testimonial-points-slider',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        prevArrow: $('.button-prev'),
        nextArrow: $('.button-next'),
        responsive: [
                    {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      });

    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (var i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
    }
    
    items.forEach(item => item.addEventListener('click', toggleAccordion));
    
    if(window_wt < 768){

      $('.elixer-points').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '80px',
        prevArrow: $('.elixer-button-prev'),
        nextArrow: $('.elixer-button-next'),
      });

      $('.nutrition-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.nutrition-button-prev'),
        nextArrow: $('.nutrition-button-next'),
      });

    }

    $(".btn").on("click",function(){
      $("#overlay").css({"display":"block"});
    });
    $("#close").on("click",function(){
        $("#overlay").css({"display":"none"});
    });

    // Get the current year
    const currentYear = new Date().getFullYear();
    const element = document.querySelector('.current-year');
    if (element) {
      element.textContent = currentYear;
    }

}.call(window, window.jQuery); // jquery initializer