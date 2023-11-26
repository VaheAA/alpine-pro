export default () => ({
  colors: ['#9FAFC9', '#2F313F', '#A475C4', '#DFDFDF'],
  sizes: [
    {
      size: 'S',
      count: 1,
    },
    {
      size: 'M',
      count: 1,
    },
    {
      size: 'L',
      count: 0,
    },
    {
      size: 'XL',
      count: 1,
    },
    {
      size: 'XXL',
      count: 0,
    },
  ],
  selectedSize: '',
  selectSize(size) {
    this.selectedSize = size;
  },
  activeTab: 'description',
  selectTab(tabLink) {
    this.activeTab = tabLink.getAttribute('href').split('#')[1];
    const allTabLinks = document.querySelectorAll('.tab-link');
    allTabLinks.forEach((link) => {
      link.classList.remove('tab-link-active');
      if (link.getAttribute('href').split('#')[1] === this.activeTab) {
        link.classList.add('tab-link-active');
      }
    });
  },
  count: 1,
  changeCount(btn) {
    const btnType = btn.getAttribute('data-cart');
    if (btnType === 'increment') {
      this.count++;
    } else if (btnType === 'decrement' && this.count === 1) {
      return;
    } else {
      this.count--;
    }
  },
});
