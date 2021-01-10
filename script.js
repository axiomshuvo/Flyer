$(document).ready(function () {

  // const reader = new FileReader();
  const fileInput = ("#imgfinder");
  const flyerimg = ("#flyerimg");
  let flyertext = ('#flyertext');

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

  // ["bounce", "pulsate","pulse","heartbeat","rotate","shake"]
  $('.flyeranimation li').click(
    function (e) {
      var id = $(this).attr('id');
      if(id == 'none'){
        $(flyertext).removeClass(["none","bounce", "pulsate","pulse","heartbeat","rotate","shake"]);
      }else{
        $(flyertext).removeClass(["bounce", "pulsate","pulse","heartbeat","rotate","shake"])
                    .addClass(id);
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