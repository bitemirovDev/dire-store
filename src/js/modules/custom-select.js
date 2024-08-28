function customSelect() {
  document.querySelectorAll('.custom-select').forEach((select) => {
    const trigger = select.querySelector('.custom-select__trigger');
    const options = select.querySelectorAll('.custom-select__option');

    trigger.addEventListener('click', function () {
      closeAllSelects(select);
      select.classList.toggle('open');
    });

    options.forEach((option) => {
      option.addEventListener('click', function () {
        trigger.querySelector('span').textContent = this.textContent;
        select.classList.remove('open');
      });
    });
  });

  function closeAllSelects(currentSelect) {
    document.querySelectorAll('.custom-select').forEach((select) => {
      if (select !== currentSelect) {
        select.classList.remove('open');
      }
    });
  }

  document.addEventListener('click', function (e) {
    const allSelects = document.querySelectorAll('.custom-select');
    let clickedInside = false;

    allSelects.forEach((select) => {
      if (select.contains(e.target)) {
        clickedInside = true;
      }
    });

    if (!clickedInside) {
      closeAllSelects();
    }
  });
}

export default customSelect;
