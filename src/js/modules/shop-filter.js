function brandsFilter() {
  const fashionBrands = document.querySelector('.fashion__filter-brands');
  const brandsTitle = fashionBrands.querySelector('h5');
  const brandsList = fashionBrands.querySelector('ul');
  const brandsArrow = fashionBrands.querySelector('.filter__arrow');

  brandsTitle.onclick = () => showList(brandsList, brandsArrow);

  function showList(list, arrow) {
    list.classList.toggle('show');
    arrow.classList.toggle('active');
  }
}

export default brandsFilter;
