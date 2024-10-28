<script setup>
import { defineProps } from 'vue'

defineProps({
  Headers: Array,
  
})
</script>
<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="header in Headers">{{ header }}</th>
            </tr>
        </thead>
        <slot></slot>
    </table>
</template>