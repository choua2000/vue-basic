<script setup>
import { onMounted, ref } from 'vue'
import UserLayout from '@/layouts/userLayout.vue'
import { useCartStore } from '@/stores/user/cart'
const cartStore = useCartStore()
const orderData = ref({})
onMounted(() => {
    cartStore.loadCheckout()
    if (cartStore.checkout.orderNumber) {
        orderData.value = cartStore.checkout
    }
})
</script>
<template>
    <UserLayout>
        <div class="mx-auto max-w-2xl p-4 bg-base-100 my-4 border border-base-200 shadow-md">
            <h1 class="text-2xl text-center">Your order is successful !</h1>
            <div>
                <div class="font-bold">Hi!: {{ orderData.name }} </div>
                <div>Prepare to wait to receive your product.</div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-4 gap-4">
                <div>
                    <div class="font-bold">Order date</div>
                    <div>{{ orderData.createdAt }}</div>
                </div>
                <div>
                    <div class="font-bold">Order number</div>
                    <div>{{ orderData.orderNumber }}</div>
                </div>
                <div>
                    <div class="font-bold">Payment method</div>
                    <div>{{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div class="font-bold">Address</div>
                    <div>{{ orderData.address }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div v-for="product in orderData.products" class="grid grid-cols-4 gap-2 mb-4">
                <div>
                    <img class="w-48" :src="product.imageurl" />
                </div>
                <div><b>{{ product.name }}</b></div>
                <div> quantity:{{ product.quantity }}</div>
                <div>TotalPrice:{{ product.price * product.quantity }} $</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
                <div class="font-bold">TotalPrice:</div>
                <div>{{ orderData.totalPrice }} $</div>
            </div>
            <div class="flex justify-between mt-4">
                <div class="font-bold">Delivery:</div>
                <div>0.00 $</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
                <div class="font-bold">TotalPrice:</div>
                <div>{{ orderData.totalPrice }} $</div>
            </div>
            <div class="divider"></div>
            <div class="text-center font-bold">Thank you for shopping with us </div>
        </div>
    </UserLayout>
</template>



<style lang="scss" scoped></style>