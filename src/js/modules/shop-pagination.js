function shopPagination() {
  const fashionPagination = document.querySelector('.fashion__pagination');
  if (!fashionPagination) return;

  const paginationList = fashionPagination.querySelector('ul');
  paginationList.onclick = (event) => {
    const target = event.target;

    if (target.classList.contains('fashion__pagination-number')) {
      toggleNumberActive(target);
    }
  };

  const paginationNumbers = paginationList.querySelectorAll('.fashion__pagination-number');
  function toggleNumberActive(number) {
    paginationNumbers.forEach((pageNumber) => {
      pageNumber.classList.remove('active');
    });
    number.classList.add('active');
  }

  const prevBtn = fashionPagination.querySelector('.pagination__btn-prev');
  const nextBtn = fashionPagination.querySelector('.pagination__btn-next');

  prevBtn.onclick = () => {};

  nextBtn.onclick = () => {};
}

export default shopPagination;
