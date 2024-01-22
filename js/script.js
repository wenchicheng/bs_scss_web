$('.navbar-toggler-icon').css({'background': ''})
$('.navbar-toggler-icon').on('click', function() {

  $(this).toggleClass('active');
})



// $('.navbar-toggler-icon').on('click', function() {
//   if (parseInt($(this).css('opacity')) === 1) {
//     $(this).css({'opacity': 0});
//     $(this).parent().find('.navbar-toggler-icon::before').css({'opacity': 1});
//   } else if (parseInt($(this).css('opacity')) === 0) {
//     $(this).css({'opacity': 1});
//     $(this).parent().find('.navbar-toggler-icon::before').css({'opacity': 0});
//   }
// })
/* GSAP================================================ */

    /* 滑鼠效果----------------------  */
    const circles = document.querySelectorAll('.circle');

    document.addEventListener('pointermove', (event) => {
      const { clientX, clientY } = event;

      circles.forEach(circle => {
        gsap.to(circle, { x: clientX, y: clientY, duration: 0.2 });
      });
    });


