const reader = new FileReader();
const fileInput = document.getElementById("imgfinder");
const img = document.getElementById("flyerimg");
reader.onload = e => {
  img.src = e.target.result;
}
fileInput.addEventListener('change', e => {
  const f = e.target.files[0];
  reader.readAsDataURL(f);
})