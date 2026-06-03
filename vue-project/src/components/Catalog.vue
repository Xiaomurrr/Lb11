<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-4">Каталог</h2>
    <h3 class="text-2xl font-bold mb-4">Владельцы котов:</h3>
    
    <ul class="border rounded p-4 bg-white shadow">
      <li v-for="item in store.fetchdata" class="mb-4 pb-4 border-b last:border-b-0">
        <p class="font-bold text-lg">{{ item.name }}</p>
        <p>Email: {{ item.email }}</p>
        <p>Город: {{ item.address.city }}</p>
        <p>Телефон: {{ item.phone }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/store'
const store = useCounterStore()
store.informdata()
store.getApidata()
</script>