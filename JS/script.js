burger = document.querySelector(".burger");
navbar = document.querySelector("#navbar");
logo = document.querySelector(".logo");
navigation = document.querySelector(".navigation");

burger.addEventListener("click", () => {
  logo.classList.toggle("menu");
  navigation.classList.toggle("menu");
  navbar.classList.toggle("vclass");
});
