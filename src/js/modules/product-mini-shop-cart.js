function miniShopCart() {
  const cartOverlay = document.querySelector('.mini-shopping-cart__overlay');
  const cart = document.querySelector('.mini-shopping-cart');
  const openBtn = document.querySelector('.product__quantity-btn button');
  const closeBtn = cart.querySelector('.mini-shopping-cart__close');

  openBtn.onclick = () => {
    openCart(cartOverlay, cart);
  };

  closeBtn.onclick = () => {
    closeCart(cartOverlay, cart);
  };

  cartOverlay.onclick = () => {
    closeCart(cartOverlay, cart);
  };

  function closeCart(overlay, cart) {
    overlay.classList.remove('active');
    cart.classList.remove('active');
  }

  function openCart(overlay, cart) {
    overlay.classList.add('active');
    cart.classList.add('active');
  }
}

export default miniShopCart;
