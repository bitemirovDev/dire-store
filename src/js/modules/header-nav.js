function HeaderNavList() {
  const listItems = document.querySelectorAll('#header-nav .nav__list-item');

  listItems.forEach((item) => {
    item.addEventListener('click', () => {
      listItems.forEach((li) => li.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

export default HeaderNavList;
