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

  let currentPageIndex = Array.from(paginationNumbers).findIndex((num) =>
    num.classList.contains('active'),
  );

  // Навешиваем обработчики событий для кнопок
  prevBtn.onclick = () => changePage(currentPageIndex - 1);
  nextBtn.onclick = () => changePage(currentPageIndex + 1);

  // Навешиваем обработчики событий на номера страниц
  paginationList.onclick = (event) => {
    const target = event.target;

    if (target.classList.contains('fashion__pagination-number')) {
      const pageIndex = Array.from(paginationNumbers).indexOf(target);
      changePage(pageIndex);
    }
  };

  function changePage(newPageIndex) {
    if (newPageIndex < 0 || newPageIndex >= paginationNumbers.length) return;

    paginationNumbers.forEach((pageNumber) => pageNumber.classList.remove('active'));
    paginationNumbers[newPageIndex].classList.add('active');

    currentPageIndex = newPageIndex;

    updateButtonStates();
  }

  function updateButtonStates() {
    // Если первая страница активна, блокируем кнопку "Назад"
    if (currentPageIndex === 0) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
    }

    // Если последняя страница активна, блокируем кнопку "Вперед"
    if (currentPageIndex === paginationNumbers.length - 1) {
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.classList.remove('disabled');
    }
  }

  // Инициализация состояния кнопок при загрузке
  updateButtonStates();
}

export default shopPagination;
