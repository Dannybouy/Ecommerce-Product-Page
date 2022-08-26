// Declaration
const currentPrice = 125;
let count = 0
let totalPriceAmt = 0;
const minusButton = document.getElementById("decrement");
const plusButton = document.getElementById("increment");
const numCount = document.querySelector(".cart-txt");
const cartCount = document.querySelector(".cart-count");
const totalPrice = document.querySelector(".total-price")
const countInCart = document.querySelector(".count");
const slides = document.getElementsByClassName('carousel-item');
const productInCart = document.querySelector(".products-in-cart")
const addToCart = document.getElementById("add-to-cart");
const iconCart = document.querySelector(".icon-cart");
const cart__navSubMenu = document.querySelector(".cart__nav-subMenu");
const cart = document.querySelector(".cart");
const productBtn = document.querySelector(".product-btn")


function openNav(){
    document.getElementById("mySidenav").classList.add("open-nav")
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove("open-nav")
  }


 // Code for the image slider/carousel
 let slidePosition = 0;
 const totalSlides = slides.length;
 
 document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
  document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

  function hideAllSlides() {
  for (let slide of slides) {
    console.log(slide)
      slide.classList.remove('carousel-item-visible');
      slide.classList.add('carousel-item-hidden');
  }
}
 
 function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-item-visible");

 }
 
 function moveToPrevSlide() {
      hideAllSlides();
      
      if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
      } else {
        slidePosition--;
      }
    
    slides[slidePosition].classList.add("carousel-item-visible");
 }

  // for the calculation button
  plusButton.addEventListener("click", function(e){
    count++;
    if(count !== 0) {
      totalPriceAmt = currentPrice * count;
      numCount.textContent = count
      cartCount.textContent = count
      numCount.textContent = count
    }
    
  })

  minusButton.addEventListener("click", function(e){
    count--;
    totalPriceAmt = currentPrice * count;
    if(count <= 0){
      count = 0
    }else {
      numCount.textContent = count
      cartCount.textContent = count
      numCount.textContent = count
    } 
  })

  iconCart.addEventListener("click",function(e){
    cart.classList.toggle("hidden");
  })

  addToCart.addEventListener("click", function(e) {
    productBtn.classList.remove("hidden");
    productInCart.innerHTML = `
      <img class="product-img" src="./images/image-product-1-thumbnail.jpg" alt="product-1-thumbnail">
      <div class="product-details">
          <span class="product-name">Autumn Limited Edition...</span>
          <span class="current-price">$125.00</span> x
          <span class="count">${count}</span>
          <span class="total-price"> $${totalPriceAmt}.00</span> 
      </div>
      <img class="delete-icon" src="images/icon-delete.svg" alt="delete-icon"> 
    </div>
  `
  })
