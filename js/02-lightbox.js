import { galleryItems } from "./gallery-items.js";

const ul = document.querySelector(".gallery");

const imagesArray = Array.from(galleryItems);

imagesArray.forEach((image) => {
  const liSkeleton = `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="Image description" />
   </a>
</li>`;
  const liElement = document.createElement("li");
  liElement.innerHTML = liSkeleton;
  ul.appendChild(liElement);
  console.log(liElement);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});

ul.querySelectorAll(".gallery__link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    lightbox.open(link.href);
  });
});
