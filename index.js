// Hamburger Section
var barBtn = document.querySelector(".bars");
var crossBtn = document.querySelector(".fa-xmark");
var open = document.querySelector(".hamburger-box");
var flag = 0;
let changeIcon = function (icon) {
  icon.style.color = "#CB954B";

  if (flag == 0) {
    open.style.left = "0";

    flag = 1;
  } else {
    open.style.left = "100%";

    flag = 0;
  }
};


// Submitted Section
var submit = document.querySelector(".submit-btn");
var submitPage = document.querySelector(".submit-box");
submit.addEventListener("click", function () {
  submitPage.style.opacity = "1";
  submitPage.style.bottom = "0";
});


// Stars Section
var stars1 = document.querySelectorAll(".fill-1");
stars1.forEach((star1, index1) => {
  star1.addEventListener("click", () => {
    stars1.forEach((star1, index2) => {
      index1 >= index2
        ? star1.classList.add("active")
        : star1.classList.remove("active");
    });
  });
});

var stars2 = document.querySelectorAll(".fill-2");
stars2.forEach((star2, index1) => {
  star2.addEventListener("click", () => {
    stars2.forEach((star2, index2) => {
      index1 >= index2
        ? star2.classList.add("active")
        : star2.classList.remove("active");
    });
  });
});

var stars3 = document.querySelectorAll(".fill-3");
stars3.forEach((star3, index1) => {
  star3.addEventListener("click", () => {
    stars3.forEach((star3, index2) => {
      index1 >= index2
        ? star3.classList.add("active")
        : star3.classList.remove("active");
    });
  });
});

var stars4 = document.querySelectorAll(".fill-4");
stars4.forEach((star4, index1) => {
  star4.addEventListener("click", () => {
    stars4.forEach((star4, index2) => {
      index1 >= index2
        ? star4.classList.add("active")
        : star4.classList.remove("active");
    });
  });
});

var stars5 = document.querySelectorAll(".fill-5");
stars5.forEach((star5, index1) => {
  star5.addEventListener("click", () => {
    stars5.forEach((star5, index2) => {
      index1 >= index2
        ? star5.classList.add("active")
        : star5.classList.remove("active");
    });
  });
});

var stars6 = document.querySelectorAll(".fill-6");
stars6.forEach((star6, index1) => {
  star6.addEventListener("click", () => {
    stars6.forEach((star6, index2) => {
      index1 >= index2
        ? star6.classList.add("active")
        : star6.classList.remove("active");
    });
  });
});
