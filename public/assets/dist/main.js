$(document).ready(function () {
  $(".counter").countUp(),
    $(".owl-carousel").owlCarousel({
      loop: !0,
      margin: 30,
      nav: !0,
      responsive: { 0: { items: 1 }, 600: { items: 3 }, 1e3: { items: 4 } },
    }),
    $(".comments").length &&
      $(".single-comment:odd").addClass("middle-comment");
});
const listTag = document.querySelectorAll(".navbar-item a "),
  navbarList = document.querySelector(".navbar-list"),
  currentLoaction = location.href,
  menuLength = listTag.length;
if (null != navbarList)
  for (let e = 0; e < menuLength; e++)
    listTag[e].href === currentLoaction &&
      listTag[e].parentElement.classList.add("activeNav");
const products = document.querySelector("#products"),
  inputVal = document.querySelector(".inputPrice"),
  price = document.querySelector(".price-value");
null != products &&
  inputVal.addEventListener("change", function () {
    price.innerHTML = inputVal.value;
  });
const headerItem1 = document.querySelector(".company-items-header .one"),
  headerItem2 = document.querySelector(".company-items-header .two"),
  headerItem3 = document.querySelector(".company-items-header .three"),
  body1 = document.querySelector(".goals"),
  body2 = document.querySelector(".values"),
  body3 = document.querySelector(".missions"),
  choose = document.querySelector("#choose");
null != choose &&
  headerItem2.addEventListener("click", function () {
    body2.classList.add("active-content"),
      body3.classList.remove("active-content"),
      body1.classList.remove("active-content"),
      headerItem1.classList.remove("active"),
      headerItem2.classList.add("active"),
      headerItem3.classList.remove("active");
  }),
  null != choose &&
    headerItem3.addEventListener("click", function () {
      headerItem2.classList.remove("active"),
        headerItem1.classList.remove("active"),
        headerItem3.classList.add("active"),
        body3.classList.add("active-content"),
        body1.classList.remove("active-content"),
        body2.classList.remove("active-content");
    }),
  null != choose &&
    headerItem1.addEventListener("click", function () {
      headerItem2.classList.remove("active"),
        headerItem1.classList.add("active"),
        headerItem3.classList.remove("active"),
        body3.classList.remove("active-content"),
        body1.classList.add("active-content"),
        body2.classList.remove("active-content");
    });
const nav = document.querySelector(".navbar-responsive"),
  navBurger = document.querySelector(".navbar-responsive-btn"),
  navList = document.querySelector(".navbar-list");
let menuOpen = !1;
nav.addEventListener("click", function () {
  menuOpen
    ? (nav.classList.remove("open"),
      (menuOpen = !1),
      (navList.style.transform = "translateX(-400px)"))
    : (nav.classList.add("open"),
      (menuOpen = !0),
      (navList.style.transform = "translateX(0px)"));
});
const slider = document.querySelector("#slider"),
  title = document.querySelector(".black"),
  contentText = document.querySelector(".blackText");
null != slider &&
  title.classList.contains("black") &&
  ((title.style.color = "black"), (contentText.style.color = "black"));
const productScroll = document.querySelector("#product"),
  product = document.querySelector(".animateProduct"),
  productTwo = document.querySelector(".animateProductFromLeft"),
  productDeatil = document.querySelector(".product-detail");
null != productScroll &&
  window.addEventListener("scroll", () => {
    250 < window.scrollY &&
      product.classList.add("animate__animated", "animate__fadeInRightBig"),
      1750 < window.scrollY &&
        productTwo.classList.add("animate__animated", "animate__fadeInLeftBig");
  });
const liTag = document.querySelector(".pagenationContainer").children;
if (null != liTag)
  for (let e = 0; e < liTag.length; e++)
    liTag[e].addEventListener("click", function () {
      liTag[e].classList.add("activePage"),
        liTag[e].previousElementSibling.classList.remove("activePage"),
        liTag[e].nextElementSibling.classList.remove("activePage");
    });
