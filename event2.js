var mySwiper = (function() {

	// Variables

	var $swiperContainer = $(".swiper-js-container");


    function init($this) {

		// Swiper elements

        var $el = $this.find('.swiper-container'),
			pagination = $this.find('.swiper-pagination'),
			navNext = $this.find('.swiper-button-next'),
            navPrev = $this.find('.swiper-button-prev'),
            paginationType = $el.data('swiper-pagination-type') ? $el.data('swiper-pagination-type') : 'bullets';
            

        var $swiper = new Swiper($el, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            breakpoints: {
              767: {
                slidesPerView: 1
              },
              1024: {
                slidesPerView: 2
              },
              1270: {
                slidesPerView: 1
              }
            },
            pagination: {
                el: pagination,
                clickable: true,
				type: paginationType
            },
            navigation: {
                nextEl: navNext,
                prevEl: navPrev,
            }
        });
         
    }
    
	// Events
	//$(document).ready(function() {
		if ($swiperContainer.length) {
			$swiperContainer.each(function(i, Slider) {
				init($(Slider));
			})
		}
    //});
         
 
})();

