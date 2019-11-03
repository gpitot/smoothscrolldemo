import "core-js/stable";
import "regenerator-runtime/runtime";
import "./sass/index.scss";

import SmoothScrollingArticle, { Item } from "future-scroll";

//maps a number x from values [a,b] to range [c,d]
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

const images = document.querySelectorAll(".scroll-image");
const items = [];

images.forEach(element => {
  const item = new Item({ element });
  item.add({
    ease: 0.1, //ease is how smooth you want the animation to move lower is smoother, but may cause performance issues.
    render: (image, current) => {
      //current will be 0-1
      //render receives 2 params, the element, and the current position on page from bottom to top of screen
      //bottom is 0
      //top is 1
      const scale = map(current, 0, 1, 1, 1.5);
      image.style.transform = `scale3d(${scale},${scale},1)`;
    }
  });

  items.push(item);
});

const titles = document.querySelectorAll(".scroll-title");
console.log(titles);
titles.forEach(element => {
  const item = new Item({ element });
  item.add({
    ease: 0.1,
    render: (title, current) => {
      const val = map(current, 0, 1, 50, -50);
      title.style.transform = `translate3d(0,${val}px,0)`;
    }
  });
  items.push(item);
});
new SmoothScrollingArticle({
  article: document.querySelector("main"),
  scrollable: document.querySelector(".scrolling-area"),
  items
});
