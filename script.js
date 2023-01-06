let a = document.getElementById("code");
let b = document.getElementById("copy");
let c = document.getElementById("close");

b.onclick = function () {
  navigator.clipboard.writeText(a.innerHTML);
  b.innerHTML = "Copied";
  setTimeout(function () {
    c.remove();
  }, 3000);
};
