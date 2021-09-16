$(function(){
  
  $(".star").rateYo({
    numStars: 5,
    starWidth: "18px",
    ratedFill:'#E7DE1B'
  });
  
  $('.product-items__inner').slick({
    // arrows:true,
    dots:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed:3000,
  });

});