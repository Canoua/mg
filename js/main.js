$(document).ready(function() 
  {    
    $("body").css("opacity", "1");
  });
  onload = function () 
  {
    for (var lnk = document.links, j = 0; j < lnk.length; j++)
    if (lnk [j].href == document.URL) lnk [j].style.cssText = 'text-shadow: 0 0 .65px #333, 0 0 .65px #333;';
  }

  $('.menu-btn').on('click', function(e)
    {
      e.preventDefault;
      $(this).toggleClass('menu-btn_active');
      $('.menu-responsive_navigation').toggleClass('menu-nav_active');
    })

  $(document).ready(function() 
    {
      $('.popup-photo').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
      });
    });

/*smooth scroll*/
    $("[data-scroll]").on("click", function(event) 
      {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        console.log(elementOffset);
        $("html, body").animate(
        {
          scrollTop: elementOffset - 70
        }, 700)
      });

/*swiper*/
    new Swiper('.swiper-container', 
      {
	       pagination: 
          {
		        el: '.swiper-pagination',
		        type: 'fraction',
		        renderFraction: function (currentClass, totalClass) 
              {
			         return '<span class="' + currentClass + '"></span>' + /*'0' + */'<span class="' + totalClass + '"></span>';
		          }
	         },
	         scrollbar: 
            {
              el: '.swiper-scrollbar',
              draggable: true,
            },
      });

  /*gallery_slick-slider*/
  let slider = $(".gallery-slider");

  $(document).ready(function()
    {
      slider.slick(
        {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          fade: true,
          responsive: 
            [
              {
                breakpoint: 1024,
                settings: 
                  {
                    infinite: true,
                    dots: true
                  }
              },
              {
                breakpoint: 600,
                settings: 
                  {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                  }
              },
              {
                breakpoint: 480,
                settings: 
                  {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
              }
            ]
        });
    });

