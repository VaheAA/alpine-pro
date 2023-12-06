export default () => ({
  isSearchOpen: false,
  searchResults: [
    {
      id: 1,
      title: 'Jacker',
      brand: 'Alpine PRO',
    },
    {
      id: 2,
      title: 'Sweater',
      brand: 'Hannah',
    },
    {
      id: 3,
      title: 'Pijamas',
      brand: 'Naturhike',
    },
    {
      id: 4,
      title: 'Jacket',
      brand: 'Alpine PRO',
    },
    {
      id: 5,
      title: 'Boots',
      brand: 'Alpine PRO',
    },
    {
      id: 6,
      title: 'Tent',
      brand: 'Alpine PRO',
    },
    {
      id: 7,
      title: 'Long sleeve shirt',
      brand: 'Alpine PRO',
    },
    {
      id: 8,
      title: 'T-shirt',
      brand: 'Alpine PRO',
    },
    {
      id: 9,
      title: 'Short sleeve shirt slim fit',
      brand: 'Alpine PRO',
    },
    {
      id: 10,
      title: 'Long sleeve shirt slim fit',
      brand: 'Alpine PRO',
    },
  ],
  brands: [],
  filteredSearch: [],
  searchSuggestions: [],
  onSearch (event) {
    this.filteredSearch = this.searchResults.filter(item => item.title.toLowerCase().includes(event.target.value.toLowerCase()))
    this.brands = [...new Set(this.filteredSearch.map(item => item.brand))];

  },
  openSearch() {
    this.isSearchOpen = !this.isSearchOpen
    this.filteredSearch = []
    this.brands = []
  }
})