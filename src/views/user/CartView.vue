<script setup>
import UserLayout from '@/layouts/userLayout.vue'
import Close from '@/components/icons/Close.vue'
import { useCartStore } from '@/stores/user/cart'
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()

const changeQuantity = (event, index) => {
    const quantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, quantity)
}

</script>

<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4"> Shopping Cart</h1>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200 p-4">
                <!-- <div v-if="cartStore.cartItems.length === 0" class="text-center">Cart data is empty</div>
                <div class="flex" v-else v-for="(cart, index) in cartStore.cartItems">
                    <div class="flex-1">
                        <img class="w-24 p-2" :src="cart.imageUrl">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-1 flex-col justify-between ">
                            <div>
                                <div class="flex flex-1 flex-col justify-between ">
                                    <div class="grid grid-cols-2 gap-4 relative">
                                        <div><b>{{ cart.name }}</b></div>
                                        <div>{{ cart.description }}</div>
                                        <div> {{ cart.price }} $</div>
                                    </div>
                                    <div class="text-right ">
                                        <select v-model="cart.quantity" class=" w-1/2 p-4"
                                            @change="changeQuantity($event, index)">
                                            <option v-for="quantity in [1, 2, 3, 4, 5, 6]">{{ quantity }}</option>
                                        </select>
                                    </div>
                                    <div @click="cartStore.removeItemCart(index)"
                                        class="absolute top-0 right-0 cursor-pointer ">
                                        <Close class="w-5"></Close>
                                    </div>
                                </div>
                            </div>
                            <div><b> stock</b></div>
                        </div>
                    </div>
                </div> -->
                <div v-if="cartStore.cartItems.length === 0" class="px-8 py-32 bg-base-200">
                    Cart is empty
                </div>
                <ul v-else class="px-8 bg-base-200">
                    <li v-for="(item, index) in cartStore.cartItems" class="flex w-full py-10" :key="index">
                        <div class="shrink-0">
                            <img class="w-48" :src="item.imageUrl">
                        </div>
                        <div class="flex flex-1 flex-col justify-between pl-4">
                            <div class="grid grid-cols-2 gap-6 relative">
                                <div>
                                    <div class="text-xl font-bold">{{ item.name }}</div>
                                    <div>{{ item.about }}</div>
                                    <div>{{ item.price }} ฿</div>
                                </div>
                                <div>
                                    <select class="p-1.5" v-model="item.quantity"
                                        @change="changeQuantity($event, index)">
                                        <option disabled selected>Quantity</option>
                                        <option v-for="quantity in [1, 2, 3, 4, 5]">{{ quantity }}</option>
                                    </select>
                                    <div @click="removeItemCart(index)" class="absolute top-0 right-0 cursor-pointer">
                                        <Close class="w-5"></Close>
                                    </div>
                                </div>
                            </div>
                            <p class="flex">
                                <RightIcon class="w-5 shrink-0"></RightIcon>
                                <span>In stock</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <div class="flex-auto w-32 bg-slate-200 p-4 text">
                <div class="text-xl font-bold">Order Summary</div>
                <div class="my-4 divide-y divide-black">
                    <div class="flex justify-between py-2">
                        <div>TotalPrice:</div>
                        <div>{{ cartStore.SummaryPrice }} $</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>Delivery:</div>
                        <div>0.00 $</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>TotalPrice:</div>
                        <div>{{ cartStore.SummaryPrice }} $</div>
                    </div>
                    <RouterLink :to="{ name: 'checkout' }" class="btn btn-neutral w-full mt-4">Checkout</RouterLink>
                </div>
            </div>
        </div>
    </UserLayout>
</template>



<style lang="scss" scoped></style>