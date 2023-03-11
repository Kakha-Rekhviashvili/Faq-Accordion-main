const titles = document.querySelectorAll(".title");

titles.forEach((n) =>
  n.addEventListener("click", () => {
    titles.forEach((x) => {
      if (x !== n) {
        x.parentElement.classList.remove("active");
      } else {
        x.parentElement.classList.toggle("active");
      }
    });
  })
);
