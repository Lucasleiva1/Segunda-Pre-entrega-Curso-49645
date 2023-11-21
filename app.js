const rightBtn = document.querySelector("#derecho");
const leftBtn = document.querySelector("#izquierdo");

const content = document.querySelector(".personajes");

rightBtn.addEventListener("click", () => {
  content.scrollLeft += 800;
});

leftBtn.addEventListener("click", () => {
  content.scrollLeft -= 800;
});
