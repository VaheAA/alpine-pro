export default () => ({
  products: [
    {
      id: 1,
      title: 'Long sleeve shirt slim fit',
      size: 'Size S - 42/44',
      price: '99.00',
      count: 1,
    },
    {
      id: 2,
      title: 'Long sleeve shirt slim fit',
      size: 'Size L - 48/50 ',
      price: '99.00',
      count: 1,
    },
    {
      id: 3,
      title: 'Long sleeve shirt slim fit',
      size: 'Size L - 48/50',
      price: '99.00',
      count: 1,
    },
  ],
  changeCount(btn, productId) {
    const btnType = btn.getAttribute('data-cart');
    if (btnType === 'increment') {
      this.products.find((product) => product.id === productId).count++;
    } else if (
      btnType === 'decrement' &&
      this.products.find((product) => product.id === productId).count === 1
    ) {
      return;
    } else {
      this.products.find((product) => product.id === productId).count--;
    }
  },
  deleteItem(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
  },
});
