function ibg(){
    let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }

}

ibg();


$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    dots:true,
    autoplay:true,
    speed:800,
      infinite: true,
      slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding: '0',
    variableWidth: true,
    variableHeight:true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          centerMode: true,
          dots:false,
          swipe:true,
          centerPadding: '30px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          dots:false,
          swipe:true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.header_burger').click(function (event) {
    $('.header_burger, .header_nav ul').toggleClass('active');
    //$('body').toggleClass('lock');
  });
});
