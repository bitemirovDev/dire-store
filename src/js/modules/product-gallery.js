function productGallery() {
  const gallery = document.querySelector('.product__gallery');
  const thumbnails = gallery.querySelector('.product__thumbnails');
  const thumbnailsEls = thumbnails.querySelectorAll('img');
  const mainImg = gallery.querySelector('.product__main-image img');

  thumbnails.onclick = (event) => {
    const target = event.target;

    if (target.tagName === 'IMG') {
      toggleActive(target);
    }
  };

  function toggleActive(img) {
    thumbnailsEls.forEach((el) => {
      el.classList.remove('active');
    });

    img.classList.add('active');
    changeMainPicture(img);
  }

  function changeMainPicture(img) {
    mainImg.src = img.src;
  }
}

export default productGallery;
