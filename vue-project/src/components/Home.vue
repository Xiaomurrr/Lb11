<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-4">Главная страница</h2>
    
    <div class="mb-4">
      <p>Добро пожаловать на сайт <strong>{{ store.name }}</strong>!</p>
    </div>

    <h3 class="text-xl font-bold mb-2">Наши коты:</h3>
    <ul class="border rounded p-4 bg-white shadow">
      <li v-for="item in store.aradata" class="mb-2">
        имя - {{ item.name }} | возраст - {{ item.age }} | зарплата - {{ item.salary }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/store'
// получаем доступ к объекту через ключи которого можно выводить данные в шаблоне
const store = useCounterStore()
</script>