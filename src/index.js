import "core-js/stable";
import "regenerator-runtime/runtime";
import "./sass/index.scss";

import SmoothScrollingArticle, { Item } from "smooth-scroll";

const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

const images = document.querySelectorAll(".content__item-img");
const items = [];

images.forEach(element => {
  const item = new Item({ element });
  item.add({
    ease: 0.1,
    minChange: 0.05,
    render: (image, current) => {
      //current will be 0-1
      const scale = map(current, 0, 1, 1, 1.5);
      image.style.transform = `scale3d(${scale},${scale},1)`;
    }
  });

  items.push(item);
});

const titles = document.querySelectorAll(".content__item-title");

titles.forEach(element => {
  const item = new Item({ element });
  item.add({
    ease: 0.1,
    minChange: 0.05,
    render: (title, current) => {
      const val = map(current, 0, 1, 50, -50);
      title.style.transform = `translate3d(0,${val}px,0)`;
    }
  });
  items.push(item);
});
new SmoothScrollingArticle({
  article: document.querySelector("main"),
  scrollable: document.querySelector("div[data-scroll]"),
  items
});
