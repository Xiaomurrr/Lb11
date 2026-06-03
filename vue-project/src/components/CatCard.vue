<template>
  <div class="border p-4 rounded bg-white shadow w-64">
    <img :src="image" alt="product" class="w-full h-40 object-cover mb-3 rounded">
    <h3 class="font-bold text-lg mb-2">{{ title }}</h3>
    <button 
      @click="$emit('take', title)" 
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Взять
    </button>
  </div>
</template>

<script>
export default {
  props: ['title', 'image']
}
</script>