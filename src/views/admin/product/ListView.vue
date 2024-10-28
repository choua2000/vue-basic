<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import adminLayout from '@/layouts/adminLayout.vue'
import Trash from '@/components/icons/Trash.vue'
import Edit from '@/components/icons/Edit.vue'
import { useProductStore } from '@/stores/admin/product'
const adminProductStore = useProductStore()

onMounted(() => {
  adminProductStore.loadProducts()
})
const removeProduct = (index) => {
    adminProductStore.removeProduct(index)
}
</script>

<template>
    <adminLayout>
        <div class="overflow-x-auto ">
            <div class="flex items-center justify-between my-4">
                <h2 class="font-bold flex-3">List Product</h2>
                <div>
                    <RouterLink to="/admin/products/create" class="btn btn-neutral">Add+</RouterLink>
                </div>
            </div>
            <table class="table">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in adminProductStore.list">
                        <th>{{ product.name }}</th>
                        <td>
                            <img :src="product.imageUrl" class="w-12">
                        </td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.remainQuantity }} / {{ product.quantity }}</td>
                        <td>
                            <div class="badge" :class="product.status === 'open' ? 'badge-success' : 'badge-error'">
                                {{ product.status }}
                            </div>
                        </td>
                        <td>{{ product.updatedAt }}</td>
                        <td>
                            <div class="flex gap-2 ">
                                <div class="btn btn-square btn-ghost" @click="removeProduct(index)">
                                    <Trash />
                                </div>
                                <RouterLink class="btn btn-square btn-ghost" :to="{ name: 'admin-products-update', params: { id: index } }" >
                                    <Edit />
                                </RouterLink>
                            </div>
                        </td>
                    </tr>

                </tbody>

            </table>
        </div>
    </adminLayout>
</template>



<style lang="scss" scoped></style>