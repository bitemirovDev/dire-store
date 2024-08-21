function productSizes() {
  const sizesVariants = document.querySelector('.product__sizes-variants');
  const sizesVariantsEls = sizesVariants.querySelectorAll('li');

  const selectedSize = document.querySelector('.product__sizes-selected span');

  sizesVariants.onclick = (event) => {
    const target = event.target;

    if (target.tagName === 'LI') {
      toggleActive(target);
      selectedSize.innerHTML = target.innerHTML;
    }
  };

  function toggleActive(size) {
    sizesVariantsEls.forEach((el) => {
      el.classList.remove('active');
    });

    size.classList.add('active');
  }
}

export default productSizes;
