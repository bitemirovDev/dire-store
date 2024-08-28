const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    contacts: './src/js/contacts.js',
    product: './src/js/product.js',
    shop: './src/js/shop.js',
    cart: './src/js/cart.js',
    checkout: './src/js/checkout.js',
    auth: './src/js/auth.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
