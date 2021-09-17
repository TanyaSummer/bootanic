$(function(){
  
  $(".star").rateYo({
    numStars: 5,
    starWidth: "18px",
    ratedFill:'#E7DE1B'
  });
  
  $('.product-items__slider').slick({
    // arrows:true,
    dots:true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:'<button type="button" class="slick-prev"><svg width="52" height="120" viewBox="0 0 52 120" fill="none"><path d="M50.8179 111.273L12.3635 60.0015L50.8179 8.72738C52.6257 6.31729 52.1368 2.89822 49.7269 1.09095C47.3171 -0.716784 43.8978 -0.227643 42.0905 2.18197L1.18187 56.7286C-0.272661 58.6679 -0.272661 61.3348 1.18187 63.274L42.0907 117.818C43.1623 119.247 44.8001 120 46.4588 120C47.5974 120 48.746 119.645 49.7271 118.909C52.1372 117.101 52.6257 113.682 50.8179 111.273Z" fill="#E0E0E0"/></svg></button>',
    nextArrow:'<button type="button" class="slick-next"><svg width="52" height="120" viewBox="0 0 52 120" fill="none"><path d="M1.1821 8.72749L39.6366 59.9985L1.1821 111.273C-0.625633 113.683 -0.136726 117.102 2.27312 118.909C4.68297 120.717 8.10228 120.228 9.90955 117.818L50.8182 63.2714C52.2727 61.3321 52.2727 58.6652 50.8182 56.726L9.90931 2.18209C8.83775 0.753105 7.19993 -0.000183105 5.54125 -0.000183105C4.40266 -0.000183105 3.25399 0.35537 2.27289 1.09107C-0.137192 2.89881 -0.625633 6.31765 1.1821 8.72749Z" fill="#E0E0E0"/></svg></button>'
  });
  
  $('.slick-dots').prepend('<li><a class="prev-btn" href="#"><img src="images/icon/prev-min.svg" alt="prev"></a></li>');
  $('.slick-dots').append('<li><a class="next-btn" href="#"><img src="images/icon/next-min.svg" alt="next"></a></li>');

  $(document).on('click', '.prev-btn', function(e) {
    e.preventDefault();
    $('.product-items__slider').slick('slickPrev');
  });
  
  $(document).on('click', '.next-btn', function(e) {
    e.preventDefault();
    $('.product-items__slider').slick('slickNext');
  });
});