<script setup>
import UserLayout from '@/layouts/userLayout.vue'
import { RouterLink , useRouter} from 'vue-router'
import { reactive } from 'vue'
import { useCartStore } from '@/stores/user/cart'
const router = useRouter()
const cartStore = useCartStore()
const FormData = [
    {
        name: 'Email',
        field: 'email',
    },
    {
        name: 'Name',
        field: 'name',
    },
    {
        name: 'Address',
        field: 'address',
    },
    {
        name: 'Note',
        field: 'note',
    },
]
const userForm = reactive({
    email: '',
    name: '',
    address: '',
    note: '',
})
const payment = () => {
  // submit checkout data
  cartStore.placeOrder(userForm)
  router.push({ name: 'success' })
}
</script>
<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4"> Shopping Cart</h1>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200 p-8">
                <div v-for="form in FormData" class="form-control w-full">
                    <label class="form-control w-full ">
                        <span class="label-text">{{ form.name }}:</span>
                    </label>
                    <input v-model="userForm[form.field]" type="text" placeholder="Type your data ..."
                        class="input input-bordered w-full " />
                </div>
                <button @click="payment" class="btn btn-primary w-full mt-4">Submit</button>
            </section>
            <section class="flex-auto w-32 bg-slate-200 px-2">
                <div v-for="Items in cartStore.cartItems" class="flex bg-white m-8 py-4">
                    <div class="flex-1">
                        <img :src="Items.imageUrl" class="w-full p-8">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between ml-4 h-full">
                            <div>
                                <h2><b>{{ Items.name }}</b></h2>
                                <p>price: {{ Items.price }}</p>
                                <div>quantity: {{ Items.quantity }} </div>
                            </div>
                            <RouterLink :to="{ name: 'cart' }" class="btn btn-success w-full    ">Edit</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="p-4">
                    <div class="text-xl font-bold justify-center text-center"><b>Order Summary</b></div>
                    <div class="flex justify-between py-2">
                        <div class="font-bold">TotalPrice:</div>
                        <div>{{ cartStore.SummaryPrice }} $</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div class="font-bold">Delivery:</div>
                        <div>0.00 $</div>
                    </div>

                </div>
                <div class="divider"></div>
                <div class="p-4">
                    <div class="flex justify-between p-2 mb-4 ">
                        <div class="font-bold">TotalPrice:</div>
                        <div>{{ cartStore.SummaryPrice }} $</div>
                    </div>
                </div>
            </section>
        </div>
    </UserLayout>
</template>



<style lang="scss" scoped></style>