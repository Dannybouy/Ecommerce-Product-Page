# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the cart and remove items from it

### Screenshot

![screenshot\Screenshot 2022-08-26 at 16-14-27 E-Commerce Product Page.png](./screenshot.jpg)
![screenshot\Screenshot 2022-08-26 at 16-15-22 E-Commerce Product Page.png](./screenshot.jpg)
![screenshot\Screen Shot 2022-08-26 at 16.18.09.png](./screenshot.jpg)
![screenshot\Screen Shot 2022-08-26 at 16.18.15.png](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
<header class="header">
  <div class="nav-menu">
    <img
      class="ham-menu"
      onclick="openNav()"
      src="images/icon-menu.svg"
      alt="hamburger"
    />
    <div class="logo-box">
      <img class="logo" src="images/logo.svg" alt="logo" />
    </div>

    <nav id="mySidenav" class="navbar">
      <div class="close">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;</a
        >
      </div>

      <ul class="nav__links">
        <li class="nav-item"><a href="#">Collections</a></li>
        <li class="nav-item"><a href="#">Men</a></li>
        <li class="nav-item"><a href="#">Women</a></li>
        <li class="nav-item"><a href="#">About</a></li>
        <li class="nav-item"><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
  <div class="sub-nav-menu">
    <img class="icon-cart" src="images/icon-cart.svg" alt="cart-img" />
    <span class="cart-count">0</span>
    <img class="avatar" src="images/image-avatar.png" alt="avatar" />
  </div>
</header>
```

```css
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 1em;
}

.ham-menu {
  margin-right: 1em;
  display: block;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 50%;
  z-index: 2;
  background-color: #fff;
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;
}
```

```js
// Code for the image slider/carousel
let slidePosition = 0;
const totalSlides = slides.length;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
  for (let slide of slides) {
    console.log(slide);
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
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
```

### Continued development

From this project, I noticed I need to improve on the concepts of media queries with CSS and look again into CSS positioning.
From what I have seen on the internet, It's clear there are shorter ways of coding out this project with less CSS code and I would have to look into that.

### Useful resources

- [CSS Media Query](https://discourse.mozilla.org/t/show-media-queries-in-responsive-design-view/50187) - This helped me with CSS media query breakpoint.
- [The toggle classList](https://blog.learnjavascript.online/posts/javascript-has-class/) - This is an amazing article which helped me finally understand the javaScript classList function(add,remove and especially toggle). I'd recommend it to anyone still learning this concept.

## Author

-
- Frontend Mentor - [@Dannybouy](https://www.frontendmentor.io/profile/Dannybouy)
- Twitter - [@Dan_d_man](https://twitter.com/IamDannybouy20)
- LinkedIn - [Daniel](https://www.linkedin.com/in/daniel-okpara/)
