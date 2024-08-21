function pricesFilter() {
  const pricesList = document.querySelector('.fashion__filter-prices ul');
  const pricesListEls = pricesList.querySelectorAll('.fashion__filter-prices ul li');

  pricesList.onclick = (event) => {
    const target = event.target;
    toggleActive(target);
  };

  function toggleActive(listItem) {
    pricesListEls.forEach((el) => {
      el.classList.remove('active');
    });

    listItem.classList.add('active');
  }
}

export default pricesFilter;
