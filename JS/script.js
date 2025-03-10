document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Animations and transformations
    const cube = document.querySelector(".cube");
    const face = this.getAttribute("href").split(" ")[1]; // Get the selected face

    // Set scale to 1 for the animation
    document.documentElement.style.setProperty("--scale-factor", "1");

    // Reset the scale after 500ms for smooth animation
    setTimeout(() => {
      document.documentElement.style.setProperty("--scale-factor", "1");
    }, 500);

    // Rotate cube based on selected face
    const rotations = {
      front: "rotateX(0deg) rotateY(0deg)",
      back: "rotateX(0deg) rotateY(180deg)",
      left: "rotateX(0deg) rotateY(-90deg)",
      right: "rotateX(0deg) rotateY(90deg)",
      top: "rotateX(90deg) rotateY(0deg)",
      bottom: "rotateX(-90deg) rotateY(0deg)",
    };

    cube.style.transform = rotations[face];
  });
});
