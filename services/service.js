/*function to observe page and apply js and css code for animation */


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target;
    console.log(entry);
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("fade-in1")) {
        target.classList.add("show-fade-in1");
      } else if (entry.target.classList.contains("fade-in2")) {
        target.classList.add("show-fade-in2");
      } else if (entry.target.classList.contains("fade-in3")) {
        target.classList.add("show-fade-in3");
      } else if (entry.target.classList.contains("fade-in4")) {
        target.classList.add("show-fade-in4");
      }
    }
  });
});

const fadeIn = document.querySelectorAll(".fade-in1, .fade-in2, .fade-in3, .fade-in4, .fade-in5, .fade-in6, .fade-in7, .fade-in8, .fade-in9, .fade-in10");
fadeIn.forEach((el) => observer.observe(el));
