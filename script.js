const reader = new FileReader();
const fileInput = document.getElementById("imgfinder");
const img = document.getElementById("flyerimg");
let flyertext = document.getElementById("flyertext");

reader.onload = e => {
  img.src = e.target.result;
}
fileInput.addEventListener('change', e => {
  const f = e.target.files[0];
  reader.readAsDataURL(f);
});

// let id = document.querySelector('flyeranimation li');
document.querySelectorAll('.flyeranimation li').forEach(function(el){
  el.addEventListener('click', function() {
     id = this.id;
    // alert(id);
    // return id;
    flyertext.classList.remove(' bounce pulsate rotate none heartbeat shake');
    flyertext.classList.add(id);
  });
});

function changeClass(id){
  
}

// flyertext.addEventListener( 'click', changeClass);

// console.log(id);