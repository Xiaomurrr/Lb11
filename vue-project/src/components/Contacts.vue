<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-4">Форма обратной связи</h2>
    
    <div class="max-w-md">
      <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">
          Имя
        </label>
        <input 
          type="text" 
          id="first_name" 
          v-model="store.firstname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Введите ваше имя" 
          required 
        />
      </div>
      
      <div>
        <label for="second_name" class="block mb-2 text-sm font-medium text-gray-900">
          Фамилия
        </label>
        <input 
          type="text" 
          id="second_name" 
          v-model="store.secondname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Введите вашу фамилию" 
          required 
        />
      </div>
      
      <button 
        type="submit" 
        @:click="store.sendmessage()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/store'
const store = useCounterStore()
</script>