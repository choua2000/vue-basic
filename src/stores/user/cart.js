import { defineStore } from "pinia";

export const useCartStore = defineStore('user-cart', {
    state: () => ({
        cartItems: [],
        checkout:{}
    }),
    getters: {
        SummaryPrice(state) {
            return state.cartItems.reduce((total, item) => {
                return total + (item.price * item.quantity)
            }, 0)
        },
        // SummaryQuantity(state) {
        //     return state.cartItems.reduce((total, item) => total + item.quantity, 0)
        // }
        summaryQuantity(state) {
            return state.cartItems.reduce((total, item) => total + item.quantity, 0);
        }
    },

    actions: {
        loadCart() {
            const previousCart = localStorage.getItem('cart-item')
            if (previousCart) {
                this.items = JSON.parse(previousCart)
            }
        },
        addToCart(productData) {
            const itemIndex = this.cartItems.findIndex(
                item => item.name === productData.name
            )
            if (itemIndex >= 0) {
                this.updateQuantity(itemIndex, this.cartItems[itemIndex].quantity + 1)
            } else {
                productData.quantity = 1
                this.cartItems.push(productData)
            }
            localStorage.setItem('cart-item', JSON.stringify(this.cartItems))
        },
        updateQuantity(index, quantity) {
            this.cartItems[index].quantity = quantity;
            localStorage.setItem('cart-item', JSON.stringify(this.cartItems));
        },
        removeItemCart(index) {
            this.cartItems.splice(index, 1);
            localStorage.setItem('cart-item', JSON.stringify(this.cartItems));
        },
        placeOrder(checkoutData) {
            let checkout = {
                ...checkoutData,
                totalPrice: this.SummaryPrice,
                paymentMethod: 'Credit Card',
                createdAt: (new Date()).toLocaleString(),
                orderNumber: `AA${(Math.floor(Math.random() * 900000) + 100000).toString()}`,
                products: this.cartItems
            }
            localStorage.setItem('checkout-data', JSON.stringify(checkout))
        },
        loadCheckout() {
            let checkoutData = localStorage.getItem('checkout-data')
            if (checkoutData) {
                this.checkout = JSON.parse(checkoutData)
            }
        }
    }
})