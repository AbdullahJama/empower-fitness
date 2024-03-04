const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target;
    console.log(entry);
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("fade-in1")) {
        target.classList.add("show-fade-in1");
        console.log(target); 
      } else if (entry.target.classList.contains("fade-in2")) {
        target.classList.add("show-fade-in2");
      } else if (entry.target.classList.contains("fade-in3")) {
        target.classList.add("show-fade-in3");
      }else if (entry.target.classList.contains("fade-in4")) {
        target.classList.add("show-fade-in4");
      } else if (entry.target.classList.contains("fade-in5")) {
        target.classList.add("show-fade-in5");
      }else if (entry.target.classList.contains("fade-in6")) {
        target.classList.add("show-fade-in6");
      }else if (entry.target.classList.contains("fade-in7")) {
        target.classList.add("show-fade-in7");
      }
      
    }
  });
});

const fadeIn = document.querySelectorAll(".fade-in1, .fade-in2, .fade-in3, .fade-in4,.fade-in5,.fade-in6, .fade-in7, .fade-in8,.fade-in9, .fade-in10, .fade-in11")
fadeIn.forEach((el)=>observer.observe(el))