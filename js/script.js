$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 30,
    dots: true,
    items: 3,
    autoWidth: true,
    loop: true,
    responsive: {
      0: {
        margin: 10,
        items: 1,
        center: true,
      },
      350: {},
    },
  });
});
