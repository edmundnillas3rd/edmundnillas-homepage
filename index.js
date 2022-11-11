const observer = new IntersectionObserver(
  (intersections) => {
    intersections.forEach(({ target, isIntersecting }) => {
      target.classList.toggle("animate", isIntersecting);
    });
  },
  {
    threshold: 0,
  }
);

document.querySelectorAll(".card-item").forEach((div) => {
  observer.observe(div);
});
