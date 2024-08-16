// let search = document.getElementById("search").value;
let clear = document.getElementById("clear");
function clearValue() {
  let sv = document.getElementById("search").value;

  sv = " ";
}
clear.addEventListener("click", clearValue);
