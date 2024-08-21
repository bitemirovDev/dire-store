function sizeFilter() {
  const sizesList = document.querySelector('.fashion__filter-sizes ul');
  const sizesListEls = sizesList.querySelectorAll('.fashion__filter-sizes ul li');

  sizesList.onclick = (event) => {
    const target = event.target;
    toggleActive(target);
  };

  function toggleActive(listItem) {
    sizesListEls.forEach((el) => {
      el.classList.remove('active');
    });

    listItem.classList.add('active');
  }
}

export default sizeFilter;
