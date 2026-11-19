const card = document.querySelector(".zoom-overlay");

// Touch users can tap to toggle the overlay; desktop users can hover.
card.addEventListener("click", () => {
  card.classList.toggle("is-active");
});

card.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    card.classList.toggle("is-active");
  }
});
