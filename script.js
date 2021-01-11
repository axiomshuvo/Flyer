$(document).ready(function () {

  // const reader = new FileReader();
  const fileInput = ("#imgfinder");
  const flyerimg = ("#flyerimg");
  let flyertext = ('#flyertext');
  const styleName = ["fanwood","hanalei","pirate","mouse","playball"];
  let animationName= ["none","bounce", "pulsate","pulse","heartbeat","flip","shake"];

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(flyerimg).attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }

  $(fileInput).change(function () {
    readURL(this);
  });

  $('.flyerinput').keyup(
    function(){
      var inputVal = $(this).val();
      $(flyertext).text(inputVal);
      console.log(inputVal);
    })

    // Style Change
    $('.flyerstyle li').click(
      function (e) {
        var style = $(this).attr('class');
        if(style == 'default'){
          $(flyertext).removeClass(styleName);
        }else{
          $(flyertext).removeClass(styleName);
          setTimeout(function() { 
            $(flyertext).addClass(style);
            }, 001);
        }
      });

    // Animation Changes
  $('.flyeranimation li').click(
    function (e) {
      var anim = $(this).attr('id');
      if(anim == 'none'){
        $(flyertext).removeClass(animationName);
      }else{
        $(flyertext).removeClass(animationName);
        setTimeout(function() { 
          $(flyertext).addClass(anim);
          }, 001);
      }
    });





});






















// const reader = new FileReader();
// const fileInput = document.getElementById("imgfinder");
// const img = document.getElementById("flyerimg");
// let flyertext = document.getElementById("flyertext");

// reader.onload = e => {
//   img.src = e.target.result;
// }
// fileInput.addEventListener('change', e => {
//   const f = e.target.files[0];
//   reader.readAsDataURL(f);
// });
// {onchange="readURL(this);"}

// // let id = document.querySelector('flyeranimation li');
// document.querySelectorAll('.flyeranimation li').forEach(function(el){
//   el.addEventListener('click', function() {
//      id = this.id;
//     // alert(id);
//     // return id;
//     flyertext.classList.remove(' bounce pulsate rotate none heartbeat shake');
//     flyertext.classList.add(id);
//   });
// });

// function changeClass(id){

// }

// flyertext.addEventListener( 'click', changeClass);

// console.log(id);