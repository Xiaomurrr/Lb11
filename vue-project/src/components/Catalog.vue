<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-4">Каталог</h2>
    <p class="mb-4">Вы взяли котов: <strong>{{ takeCount }}</strong></p>

    <div class="flex gap-6 flex-wrap">
      <CatCard 
        title="Рыжий кот" 
        image="/cats/cat1.jpg" 
        @take="Take"
      />
      <CatCard 
        title="Серый кот" 
        image="/cats/cat2.jpg" 
        @take="Take"
      />
      <CatCard 
        title="Чёрный кот" 
        image="/cats/cat3.jpg" 
        @take="Take"
      />
    </div>
  </div>
</template>

<script setup>
import CatCard from './CatCard.vue'
import { ref } from 'vue'

let takeCount = ref(0)
function Take(name) {
  takeCount.value++
  alert(`Вы взяли: ${name}!`)
}
</script>