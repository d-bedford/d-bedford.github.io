const introBtn = document.querySelector(".intro button");
const footerText = document.querySelector("footer p");
const date = new Date();
introBtn.style.opacity = 0;
console.log(introBtn);
setTimeout(addClass, 2000);
function addClass(){
    introBtn.style.opacity = 1;
    introBtn.className = "show";
}
footerText.textContent+= " " + date.getFullYear();