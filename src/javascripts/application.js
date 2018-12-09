const items = document.querySelector(".js-carousel-items")
const next = document.querySelector(".js-next")
const prev = document.querySelector(".js-prev")

let index = 0;
next.addEventListener("click", (evt) => {
  index += 1;
  items.style.transform = `translateX(-${index * 490}px)`;
})


prev.addEventListener("click", (evt) => {
  index -= 1;
  items.style.transform = `translateX(-${index * 490}px)`;
})


