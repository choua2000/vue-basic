<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="h-screen flex items-center ">
        <div class="flex-1 max-w-2xl shadow-xl mx-auto p-8">
            <div class="flex flex-col items-center">
                <h1 class="text-2xl font-bold">Login</h1>
            </div>
            <div class="form-control w-full ">
                <div class="label">
                    <span class="label-text">Email</span>
                </div>
                <input type="text" placeholder="Type your email ..." class="input input-bordered w-full " />
            </div>
            <div class="form-control w-full ">
                <div class="label">
                    <span class="label-text">Password</span>
                </div>
                <input type="password" placeholder="Type your password ..." class="input input-bordered w-full " />
            </div>
            <RouterLink to="/admin/dashboard" class="btn btn-neutral mt-4 w-full">Login</RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>