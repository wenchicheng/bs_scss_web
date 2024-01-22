/* toggler-icon======================================== */
$('.navbar-toggler-icon').css({'background': ''})
$('.navbar-toggler-icon').on('click', function() {

  $(this).toggleClass('active');
})




/* swiper===============================================*/
    /* 
    兩個參數：
    第一參數：抓目標，通常是id
    第二參數:選項物件(option object,{}) 主要設定套件的屬性
    */
    const swiper01 = new Swiper("#swiper01", {
      loop: true,     //無限循環
      speed: 1500,    //動畫轉場時間
      autoplay: {
        delay: 5000   //自動撥放，幾秒後下一張
      },
      mousewheel: true,//滾輪


      // 啟用上一張、下一張功能
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    });


/* GSAP================================================ */

    /* 滑鼠效果----------------------  */
    const circles = document.querySelectorAll('.circle');

    document.addEventListener('pointermove', (event) => {
      const { clientX, clientY } = event;

      circles.forEach(circle => {
        gsap.to(circle, { x: clientX, y: clientY, duration: 0.2 });
      });
    });


