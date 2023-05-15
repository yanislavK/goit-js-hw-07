import { galleryItems } from "./gallery-items.js";

// Change code below this line

const ul = document.querySelector(".gallery");

const imagesArray = Array.from(galleryItems);

imagesArray.forEach((image) => {
  const li = document.createElement(`li`);
  const a = document.createElement(`a`);
  const img = document.createElement(`img`);

  li.classList.add("gallery__item");
  a.classList.add("gallery__link");
  img.classList.add("gallery__image");

  a.setAttribute("href", `${image.original}`);
  img.setAttribute("src", `${image.preview}`);
  img.setAttribute("data-source", `${image.original}`);
  img.setAttribute("alt", `${image.description}`);

  a.appendChild(img);
  li.appendChild(a);

  ul.appendChild(li);
});

ul.addEventListener(`click`, getOriginalImage);

function getOriginalImage(event) {
  blockStandartAction(event);
  if (event.target.nodeName != `IMG`) {
    return;
  }

  const instance = basicLightbox.create(
    ` <img width="auto" height="auto" src="${event.target.dataset.source}"> `
  );

  instance.show();

  ul.addEventListener(`keydown`, (event) => {
    if (event.code === `Escape`) {
      instance.close();
    }
  });
}

function blockStandartAction(event) {
  event.preventDefault();
}
