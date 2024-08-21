function productQuantity() {
  const quantity = document.querySelector('.product__quantity');
  const input = quantity.querySelector('.product__quantity-input input');
  const plusBtn = quantity.querySelector('.product__quantity-input .plus');
  const minusBtn = quantity.querySelector('.product__quantity-input .minus');

  function increment(input) {
    input.value = parseInt(input.value) + 1;
  }

  function decrement(input) {
    const currentValue = parseInt(input.value);
    if (currentValue > 1) {
      input.value = currentValue - 1;
    }
  }

  plusBtn.onclick = () => {
    increment(input);
  };

  minusBtn.onclick = () => {
    decrement(input);
  };
}

export default productQuantity;
