$(document).ready(function () {
  //carousel 手機滑動
  $(".carousel").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
      var xMove = event.originalEvent.touches[0].pageX;
      if (Math.floor(xClick - xMove) > 5) {
        $(this).carousel('next');
      }
      else if (Math.floor(xClick - xMove) < -5) {
        $(this).carousel('prev');
      }
    });
    $(".carousel").on("touchend", function () {
      $(this).off("touchmove");
    });
  })
  
  $.fn.snow({
    // maxSize: 50, 
    // newOn: 100 
 })
  
});

// $(function () {
//   $up();
//   setInterval(function(){
//     $up();
//   },5000)

//   function $up() {
//     $('.drink div').removeClass('up').each(function(index){
//       $(this).delay(index*200).animate({
//         'background':'transparent'
//       },0,function(){
//         $(this).addClass('up')
//       })
//     })
//   }
// })
