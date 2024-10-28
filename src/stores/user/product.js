import { defineStore } from "pinia";

export const useProductStore = defineStore('user-product', {
    state: () => ({
        list: [],
        loaded: false
    }),
    actions: {
        loadProducts () {
            const productList = localStorage.getItem('product-data')
            if (productList) {
              this.list = JSON.parse(productList)
            }
            this.loaded = true
          },
          
        filterProducts (searchTerm) {
            if(this.loaded) {
                this.loadProducts()
            }
            return this.list.filter(product => product.name.includes(searchTerm))
        }
        
    }
})