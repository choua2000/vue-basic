<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
defineProps({
    products: Array,
    addToCart: Function
})
</script>
<template>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        <div v-for="product in products" class="card bg-base-100 w-full shadow-xl">
            <figure>
                <img class="w-full" :src="product.imageUrl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ product.name }}</h2>
                <p> {{ product.about }}</p>
                <strong>{{ product.price }} $</strong>
                <p>{{ product.quantity }}</p>
                <p>{{ product.status }}</p>
                <strong>4.2</strong>
                <div class="card-actions justify-between ">
                    <RouterLink to="/View" class="btn btn-neutral">Views</RouterLink>
                    <button @click="addToCart(product)" class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </section>
</template>



<style lang="scss" scoped></style>