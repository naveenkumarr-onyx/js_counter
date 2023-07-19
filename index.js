// const increment =  document.getElementById("increment")
// const Decrement =  document.getElementById("Decrement")
// const Neutral =  document.getElementById("neutral")
var count = 0;
const inc = document.getElementById("incre");
const dec = document.getElementById("Decrement");
const neu = document.getElementById("Neutral")
const el = document.getElementById("counter");

inc.addEventListener("click", () => {
  el.innerText = count++;
});
dec.addEventListener("click", () => {
  el.innerText = count--;
});
neu.addEventListener('click',()=>{
    el.innerText = 0;
})
