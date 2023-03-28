let a = document.querySelector("#hover");
let onHover = document.querySelector(".onHover");
a.addEventListener("mouseover", () => {
  onHover.style.display = "flex";
});

a.addEventListener("mouseout", () => {
  onHover.style.display = "none";
});

onHover.addEventListener("mouseover", () => {
  onHover.style.display = "flex";
});

onHover.addEventListener("mouseout", () => {
  onHover.style.display = "none";
});
