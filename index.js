const introBtn = document.querySelector(".intro button");
introBtn.style.opacity = 0;
console.log(introBtn);
setTimeout(addClass, 2000);
function addClass(){
    introBtn.style.opacity = 1;
    introBtn.className = "show";
}