// // import { defineStore } from "pinia";

// // export const useAdminProductStore = defineStore('admin-products', {
// //     state: () => ({
// //         list: [],
// //         loaded: false
// //     }),
// //     actions: {
// //         loadProduct(){
// //             const product = localStorage.getItem('admin-products')
// //             if(product) {
// //                 this.list = JSON.parse(product)
// //             }
// //         },
// //         getProduct(index){
// //             if(this.loaded) {
// //                 this.loadProduct()
// //             }
// //             return this.list[index]
// //         },
// //         addProduct(productData){
// //             productData.remainQuantity = productData.quantity
// //             productData.updatedAt = (new Date()).toLocaleDateString()
// //             this.list.push(productData)
// //             localStorage.setItem('admin-products',JSON.stringify(this.list)) 
// //         },
// //         updateProduct(index,productData){
// //             this.list[index].name = productData.name
// //             this.list[index].image = productData.image
// //             this.list[index].price = productData.price
// //             this.list[index].quantity = productData.quantity
// //             this.list[index].remainQuantity = productData.quantity
// //             this.list[index].status = productData.status
// //             this.list[index].updatedAt = (new Date()).toLocaleDateString()  
// //             localStorage.setItem('admin-products',JSON.stringify(this.list)) 
// //         },
// //         removeProduct(index){
// //             this.list.splice(index, 1)
// //             localStorage.setItem('admin-products',JSON.stringify(this.list)) 
// //         }
// //     }

// // })

// import { defineStore } from 'pinia'

// export const useAdminProductStore = defineStore('admin-product', {
//   state: () => ({
//     list: [{
//         name: 'Product 1',
//         image: 'image1.jpg',
//         price: 100,
//         quantity: 10,
//         remainQuantity: 10,
//         status: 'active',
//         // createdAt: (new Date()).toLocaleString(),
//         updatedAt: (new Date()).toLocaleString(),
  
//     }],
//     loaded: false,
//   }),
//   actions: {
//     loadProduct () {
//       const productList = localStorage.getItem('admin-products')
//       if (productList) {
//         this.list = JSON.parse(productList)
//       }
//     },
//     getProduct (index) {
//       return this.list[index]
//     },
//     addProduct (productData) {
//       productData.remainQuantity = productData.quantity
//       this.list.push(productData)
//       // save to localstorage
//       localStorage.setItem('admin-products', JSON.stringify(this.list))
//     },
//     updateProduct (index, productData) {
//       this.list[index].name = productData.name
//       this.list[index].imageUrl = productData.imageUrl
//       this.list[index].price = productData.price
//       this.list[index].quantity = productData.quantity
//       this.list[index].remainQuantity = productData.quantity
//       this.list[index].status = productData.status
//       this.list[index].updatedAt = (new Date).toLocaleString()
//       // save to localstorage
//       localStorage.setItem('admin-products', JSON.stringify(this.list))
//     },
//     removeProduct (index) {
//       this.list.splice(index, 1)
//       // save to localstorage
//       localStorage.setItem('admin-products', JSON.stringify(this.list))
//     }
//   }
// })

import { defineStore } from 'pinia'

export const useProductStore = defineStore('admin-product', {
  state: () => ({
    list: []
  }),
  actions: {
    loadProducts () {
      const productList = localStorage.getItem('product-data')
      if (productList) {
        this.list = JSON.parse(productList)
      }
    },
    getProduct (index) {
      return this.list[index]
    },
    addProduct (productData) {
      productData.remainQuantity = productData.quantity
      this.list.push(productData)
      // save to localstorage
      localStorage.setItem('product-data', JSON.stringify(this.list))
    },
    updateProduct (index, productData) {
      this.list[index].name = productData.name
      this.list[index].imageUrl = productData.imageUrl
      this.list[index].quantity = productData.quantity
      this.list[index].remainQuantity = productData.quantity
      this.list[index].status = productData.status
      this.list[index].updatedAt = (new Date).toLocaleString()
      // save to localstorage
      localStorage.setItem('product-data', JSON.stringify(this.list))
    },
    removeProduct (index) {
      this.list.splice(index, 1)
      // save to localstorage
      localStorage.setItem('product-data', JSON.stringify(this.list))
    }
  }
})